import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { workExperienceSchema } from "@/lib/validation";
import { resumeDataInclude, prismaToResumeValues } from "@/lib/types";

interface PageProps {
    searchParams : Promise<{resumeId?: string}>
}

export const metadata: Metadata = {
    title: "Design your resume"
};


export default async function Page({searchParams}: PageProps){
    const {resumeId} = await searchParams

    const {userId} = await auth();

    if(!userId){
       return null; 
    }

    const resumetoEdit = resumeId? await prisma.resume.findUnique({
        where : {id: resumeId, userId},
        include : resumeDataInclude

    })
    : null
    return <ResumeEditor
    resumeToEdit={prismaToResumeValues(resumetoEdit)}
    />;
}