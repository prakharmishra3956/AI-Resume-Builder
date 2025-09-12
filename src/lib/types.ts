
import { ResumeValues } from "./validation";
import { Prisma} from "@/generated/prisma";

export interface EditorFormProps {
    resumeData: ResumeValues;
    setResumeData: (data: ResumeValues) => void;
}

export const resumeDataInclude = {
    workExperiences : true,
    educations : true
} satisfies Prisma.ResumeInclude;

export type ResumeSeverData = Prisma.ResumeGetPayload<{
    include : typeof resumeDataInclude;
}>

// Utility function to convert Prisma nulls to undefined for ResumeValues compatibility
export function prismaToResumeValues(data: ResumeSeverData | null): ResumeValues | null {
    if (!data) return null;

    const result: Partial<ResumeValues> = {
        id: data.id,
        title: data.title ?? undefined,
        description: data.description ?? undefined,
        colorHex: data.colorHex ?? undefined,
        borderStyle: data.borderStyle ?? undefined,
        summary: data.summary ?? undefined,
        firstName: data.firstName ?? undefined,
        lastName: data.lastName ?? undefined,
        jobTitle: data.jobTitle ?? undefined,
        city: data.city ?? undefined,
        country: data.country ?? undefined,
        phone: data.phone ?? undefined,
        email: data.email ?? undefined,
        // @ts-expect-error - Type assertion for photo property compatibility
        photo: data.photourl ?? undefined,
        skills: Array.isArray(data.skills) ? data.skills : [],
        workExperiences: data.workExperiences?.map(exp => ({
            position: exp.position ?? undefined,
            company: exp.company ?? undefined,
            startDate: exp.startDate ? exp.startDate.toISOString().split('T')[0] : undefined,
            endDate: exp.endDate ? exp.endDate.toISOString().split('T')[0] : undefined,
            description: exp.description ?? undefined,
        })) ?? [],
        education: data.educations?.map(edu => ({
            degree: edu.degree ?? undefined,
            school: edu.school ?? undefined,
            startDate: edu.startDate ? edu.startDate.toISOString().split('T')[0] : undefined,
            endDate: edu.endDate ? edu.endDate.toISOString().split('T')[0] : undefined,
        })) ?? [],
    };

    return result as ResumeValues;
}
