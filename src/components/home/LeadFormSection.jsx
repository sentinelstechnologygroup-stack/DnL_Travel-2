import React from "react";
import SectionLabel from "../shared/SectionLabel";
import LeadForm from "../shared/LeadForm";

export default function LeadFormSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <SectionLabel label="START PLANNING" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Let's Craft Your
              <br />
              <span className="text-primary">Dream Trip</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Fill out the form and we'll reach out within 24 hours with personalized recommendations. No obligation, no booking engines — just expert guidance from a real travel advisor.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">No Service Fees</h4>
                  <p className="text-muted-foreground text-xs mt-1">Our planning service is complimentary.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Personal Attention</h4>
                  <p className="text-muted-foreground text-xs mt-1">You work directly with your advisor — not a call center.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Expert Guidance</h4>
                  <p className="text-muted-foreground text-xs mt-1">Backed by InteleTravel's industry-leading resources.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-card border border-border p-8 lg:p-10">
            <h3 className="text-[10px] tracking-[0.2em] text-primary font-semibold uppercase mb-6">
              REQUEST A FREE CONSULTATION
            </h3>
            <LeadForm source="homepage" />
          </div>
        </div>
      </div>
    </section>
  );
}