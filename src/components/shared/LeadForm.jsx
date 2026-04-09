// src/components/shared/LeadForm.jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const FORM_ENDPOINT = import.meta.env.VITE_LEAD_FORM_ENDPOINT || "";

export default function LeadForm({ source = "homepage", compact = false }) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    travel_type: "",
    travel_dates: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const buildPayload = () => ({
    ...form,
    source,
    submitted_at: new Date().toISOString(),
  });

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const openMailClientFallback = () => {
    const subject = encodeURIComponent(`New Travel Inquiry - ${source}`);
    const body = encodeURIComponent(
      [
        `Source: ${source}`,
        `Submitted: ${new Date().toLocaleString()}`,
        "",
        `Full Name: ${form.full_name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Travel Type: ${form.travel_type}`,
        `Preferred Travel Dates: ${form.travel_dates}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:darryl@dandltraveladventures.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(buildPayload()),
        });

        if (!response.ok) {
          throw new Error("Form submission failed.");
        }

        setSubmitted(true);
      } else {
        openMailClientFallback();
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Lead form submission error:", error);
      setSubmitError(
        "There was a problem sending your request. Please try again or call us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <CheckCircle2 className="mb-4 h-12 w-12 text-primary" />
        <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You</h3>
        <p className="text-sm text-muted-foreground">
          We&apos;ve received your inquiry and will be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className={`grid gap-4 ${
          compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Full Name *
          </label>
          <Input
            required
            placeholder="Your full name"
            value={form.full_name}
            onChange={(e) => updateField("full_name", e.target.value)}
            className="h-11 border-border bg-muted text-foreground placeholder:text-muted-foreground/50"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Email *
          </label>
          <Input
            required
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="h-11 border-border bg-muted text-foreground placeholder:text-muted-foreground/50"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Phone
          </label>
          <Input
            type="tel"
            placeholder="(555) 123-4567"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="h-11 border-border bg-muted text-foreground placeholder:text-muted-foreground/50"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Travel Type
          </label>
          <Select
            value={form.travel_type}
            onValueChange={(value) => updateField("travel_type", value)}
          >
            <SelectTrigger className="h-11 border-border bg-muted text-foreground">
              <SelectValue placeholder="Select travel type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="caribbean">Caribbean Escape</SelectItem>
              <SelectItem value="european">European Adventure</SelectItem>
              <SelectItem value="cruise">Cruise</SelectItem>
              <SelectItem value="all_inclusive">All-Inclusive Resort</SelectItem>
              <SelectItem value="destination_wedding">Destination Wedding</SelectItem>
              <SelectItem value="honeymoon">Honeymoon</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {!compact && (
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Preferred Travel Dates
          </label>
          <Input
            placeholder="e.g., June 2026, flexible"
            value={form.travel_dates}
            onChange={(e) => updateField("travel_dates", e.target.value)}
            className="h-11 border-border bg-muted text-foreground placeholder:text-muted-foreground/50"
          />
        </div>
      )}

      <div className="space-y-1.5">
        <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Message
        </label>
        <Textarea
          placeholder="Tell us about your dream trip..."
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="min-h-[100px] border-border bg-muted text-foreground placeholder:text-muted-foreground/50"
        />
      </div>

      {submitError ? <p className="text-sm text-destructive">{submitError}</p> : null}

      <Button
        type="submit"
        disabled={submitting}
        className="h-12 w-full bg-primary text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90"
      >
        {submitting ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Start Planning My Trip
          </>
        )}
      </Button>
    </form>
  );
}