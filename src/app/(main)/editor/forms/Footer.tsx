import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "../steps";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
  showSmResumePreview: boolean;
  setShowSmResumePreview: Dispatch<SetStateAction<boolean>>;
  isSaving: boolean;
}

export default function Footer({
  currentStep,
  setCurrentStep,
  showSmResumePreview,
  setShowSmResumePreview,
  isSaving,
}: FooterProps) {
  const previousStep = steps.find(
    (_, index) => steps[index + 1]?.key === currentStep,
  )?.key;

  const nextStep = steps.find(
    (_, index) => steps[index - 1]?.key === currentStep,
  )?.key;

  return (
    <footer className="w-full shrink-0 border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        {/* Step navigation */}
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            onClick={
              previousStep ? () => setCurrentStep(previousStep) : undefined
            }
            disabled={!previousStep}
          >
            Previous Step
          </Button>
          <Button
            onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
            disabled={!nextStep}
          >
            Next Step
          </Button>
        </div>

        {/* Right side: preview toggle + close + saving */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowSmResumePreview(!showSmResumePreview)}
            className="md:hidden"
          >
            {showSmResumePreview ? "Hide Preview" : "Show Preview"}
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/resumes">Close</Link>
          </Button>

          <p className={cn("text-muted-foreground text-sm",
            isSaving && "opacity-100",
          )}>
          </p>
        </div>
      </div>
    </footer>
  );
}
