import prisma from "@/lib/prisma";
import { resumeDataInclude, ResumeSeverData } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import CreateResumesButton from "./CreateResumeButton";
import ResumeItem from "./ResumeItem";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import { canCreateResume } from "@/lib/permissions";

export const metadata: Metadata = {
  title: "Your resumes",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const [resumes, totalCount, subscriptionLevel] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
    getUserSubscriptionLevel(userId),
  ]);

  //TODO: Check quota for non premium users.

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      <CreateResumesButton
        canCreate={canCreateResume(subscriptionLevel, totalCount)}
      />
      <div className="text-3xl font-bold">
        Your Resumes
        <p>Total: {totalCount}</p>
      </div>
      <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {resumes.map((resume: ResumeSeverData) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
    </main>
  );
}
