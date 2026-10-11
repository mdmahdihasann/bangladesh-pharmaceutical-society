import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-brand-950 pt-32 pb-20">
      <div className="container-bps text-center">
        <p className="text-8xl font-extrabold text-white/15 sm:text-[10rem]">404</p>
        <h1 className="-mt-6 text-3xl font-extrabold text-white sm:text-5xl">This page could not be found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-brand-200">
          The page you are looking for may have moved. Let&apos;s get you back on track.
        </p>
        <ButtonLink href="/" variant="light" className="mt-10">
          <ArrowLeft className="size-4" aria-hidden /> Back to home
        </ButtonLink>
      </div>
    </section>
  );
}
