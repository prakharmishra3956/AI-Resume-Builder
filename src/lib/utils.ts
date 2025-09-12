import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ResumeSeverData } from "./types"
import { ResumeValues } from "./validation"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapToResumeValues(data: ResumeSeverData): ResumeValues {
    return {
      id : data.id,
      title : data.title || undefined,
      description : data.description || undefined,
      colorHex : data.colorHex || undefined,
      borderStyle : data.borderStyle || undefined,
      summary : data.summary || undefined,
      photo : data.photourl || undefined,
      firstName : data.firstName || undefined,
      lastName : data.lastName || undefined,
      jobTitle : data.jobTitle || undefined,
      city : data.city || undefined,
      country : data.country || undefined,
      phone : data.phone || undefined,
      email : data.email || undefined,
      skills : Array.isArray(data.skills) ? data.skills : [],
      workExperiences : data.workExperiences?.map(exp => ({
        position: exp.position || undefined,
        company: exp.company || undefined,
        startDate: exp.startDate ? exp.startDate.toISOString().split('T')[0] : undefined,
        endDate: exp.endDate ? exp.endDate.toISOString().split('T')[0] : undefined,
        description: exp.description || undefined,
      })) || [],
      education : data.educations?.map(edu => ({
        degree: edu.degree || undefined,
        school: edu.school || undefined,
        startDate: edu.startDate ? edu.startDate.toISOString().split('T')[0] : undefined,
        endDate: edu.endDate ? edu.endDate.toISOString().split('T')[0] : undefined,
      })) || [],
    } as ResumeValues
}
