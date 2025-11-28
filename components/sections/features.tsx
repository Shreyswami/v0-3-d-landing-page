"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Cpu, Globe, BarChart3, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience sub-millisecond response times with our globally distributed edge network.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Cpu,
    title: "Advanced AI Models",
    description: "Access cutting-edge language models fine-tuned for your specific use cases.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy to 200+ edge locations worldwide with automatic failover and load balancing.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance, usage, and costs with comprehensive dashboards and alerts.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Lock,
    title: "Private Deployment",
    description: "Run on your own infrastructure with our self-hosted enterprise solution.",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything you need to build{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              amazing products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you ship faster and scale without limits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-8 rounded-3xl bg-glass backdrop-blur-xl border border-glass-border shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
