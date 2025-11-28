"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small projects",
    features: ["10,000 API calls/month", "2 team members", "Basic analytics", "Community support", "99.5% uptime SLA"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "Ideal for growing teams and businesses",
    features: [
      "100,000 API calls/month",
      "10 team members",
      "Advanced analytics",
      "Priority support",
      "99.9% uptime SLA",
      "Custom integrations",
      "API webhooks",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments and custom needs",
    features: [
      "Unlimited API calls",
      "Unlimited team members",
      "Enterprise analytics",
      "24/7 dedicated support",
      "99.99% uptime SLA",
      "Custom AI models",
      "On-premise deployment",
      "SOC 2 compliance",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transparent</span>{" "}
            pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative group ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`absolute inset-0 rounded-3xl ${plan.popular ? "bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" : "bg-gradient-to-br from-primary/10 to-accent/10 blur-xl opacity-0 group-hover:opacity-100"} transition-opacity`}
              />

              <div
                className={`relative h-full p-8 rounded-3xl ${plan.popular ? "bg-glass border-primary/30" : "bg-glass"} backdrop-blur-xl border border-glass-border`}
              >
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
