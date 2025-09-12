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
      photo : data.photoUrl || undefined,
      firstName : data.firstName || undefined, 
      lastName : data.lastName || undefined,
    }
}