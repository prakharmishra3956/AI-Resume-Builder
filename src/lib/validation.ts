import { z } from "zod";

// Reusable optional string schema
export const optionalString = z.string().trim().optional().or(z.literal(""));

// General information schema
export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

// Personal information schema
export const personalInfoSchema = z.object({
  photo: z
    .custom<File | null | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Must be an image file",
    )
    .refine(
      (file) => !file || file.size <= 1024 * 1024 * 4,
      "File must be less than 4MB",
    )
    .nullable()
    .optional(),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

export const workExperienceSchema = z.object({
  workExperiences: z
    .array(
      z.object({
        position: optionalString,
        company: optionalString,
        startDate: optionalString,
        endDate: optionalString,
        description: optionalString,
      }),
    )
    .optional(),
});

export type WorkExperienceValues = z.infer<typeof workExperienceSchema>;

export const educatiionSchema = z.object({
  education: z
    .array(
      z.object({
        degree: optionalString,
        school: optionalString,
        startDate: optionalString,
        endDate: optionalString,
      }),
    )
    .optional(),
});

export type EducationValues = z.infer<typeof educatiionSchema>;

export const skillsSchema = z.object({
  skills: z.array(z.string().trim().optional()),
});

export type SkillsValues = z.infer<typeof skillsSchema>;

export const summarySchema = z.object({
  summary: optionalString,
});
export type SummaryValues = z.infer<typeof summarySchema>;

// Full resume schema combining both
export const resumeSchema = generalInfoSchema
  .merge(personalInfoSchema)
  .merge(workExperienceSchema)
  .merge(educatiionSchema)
  .merge(skillsSchema)
  .merge(summarySchema)
  .extend({
    colorHex: optionalString,
    borderStyle: optionalString,
  });

export type ResumeValues = z.infer<typeof resumeSchema> & {
  id?: string;
  photo?: string | File | null;
};
