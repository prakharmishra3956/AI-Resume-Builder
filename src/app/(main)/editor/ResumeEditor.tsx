"use client";

import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ResumePreviewSection from "./ResumePreviewSection";
import { steps } from "./steps";
import Footer from "./forms/Footer";
import useUnloadWarning from "@/hooks/unloadWarning";
import useAutoSaveResume from "./useAutoSaveResume";


interface ResumeEditorProps {
  resumeToEdit?: ResumeValues | null; // ✅ optional
}

export default function ResumeEditor({ resumeToEdit }: ResumeEditorProps) {
  const searchParams = useSearchParams();

  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit ?? {
      skills: [],
      workExperiences: [],
      education: [],
    } as ResumeValues,
  );

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);

  useUnloadWarning(hasUnsavedChanges);

  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  useUnloadWarning();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="shrink-0 space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-muted-foreground text-sm">
          Follow the steps below to create your resume.
        </p>
      </header>

      {/* Main content */}
      <main className="flex flex-1 overflow-hidden">
        {/* LEFT: Form section */}
        <div
          className={cn(
            "flex w-full flex-col md:w-1/2",
            showSmResumePreview && "hidden md:flex",
          )}
        >
          {/* Scrollable form content */}
          <div className="flex-1 space-y-6 overflow-y-auto p-3">
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>

          {/* Footer always pinned */}
          <div className="shrink-0 border-t">
            <Footer
              currentStep={currentStep}
              setCurrentStep={setStep}
              showSmResumePreview={showSmResumePreview}
              setShowSmResumePreview={setShowSmResumePreview}
              isSaving={isSaving} // replace with real isSaving if needed
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block md:border-r" />

        {/* RIGHT: Preview section (scrollable if needed) */}
        <div className="bg-secondary flex-1 overflow-auto">
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(showSmResumePreview && "flex")}
          />
        </div>
      </main>
    </div>
  );
}
