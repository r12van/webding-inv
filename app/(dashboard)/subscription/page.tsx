import { PricingCard } from "@/components/marketing/pricing-card";

export default function SubscriptionPage() {
  return <div className="space-y-4"><h1 className="text-2xl font-bold">Subscription</h1><div className="grid gap-4 md:grid-cols-3"><PricingCard name="FREE" price="Rp0" features={["1 invitation","basic theme","watermark"]} /><PricingCard name="PREMIUM" price="Rp149k" features={["premium themes","digital gift","no watermark","analytics"]} /><PricingCard name="BUSINESS" price="Rp349k" features={["multiple invitations","white label","custom domain placeholder"]} /></div></div>;
}
