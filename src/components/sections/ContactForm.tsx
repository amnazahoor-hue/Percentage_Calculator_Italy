"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Enter a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  website: z.string().max(0, "Validation error"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { website: "" },
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <FadeIn>
        <Card padding="lg" className="text-center">
          <h2 className="text-display-h3 text-text">Thanks For Your Message!</h2>
          <p className="mt-4 text-body">
            We received your request and will reply as soon as possible to the
            email address you provided.
          </p>
          <Button
            className="mt-6"
            variant="outline"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </Button>
        </Card>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Card padding="lg">
        <div className="space-y-5">
          <Input
            label="Full name"
            placeholder="Jane Smith"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Email"
            type="email"
            placeholder="jane@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Subject"
            placeholder="Information request"
            error={errors.subject?.message}
            {...register("subject")}
          />
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-text"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here (minimum 20 characters)..."
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              {...register("message")}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-sm text-error">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" loading={isSubmitting}>
            Send
          </Button>
        </div>
        </Card>
      </form>
    </FadeIn>
  );
}
