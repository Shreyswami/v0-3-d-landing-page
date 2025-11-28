"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    image: "/professional-woman-portrait.png",
    content:
      "NexusAI transformed how we build products. The speed and reliability are unmatched. We've cut our development time by 60%.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder at ScaleUp",
    image: "/professional-man-portrait.png",
    content:
      "The AI capabilities are incredible. We've automated processes that used to take hours. Best decision we ever made.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering at DataPro",
    image: "/professional-woman-executive.png",
    content: "Enterprise-grade security with startup-level agility. NexusAI gives us the best of both worlds.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Lead Developer at CloudNine",
    image: "/professional-asian-man-portrait.png",
    content:
      "The developer experience is phenomenal. Great documentation, amazing support, and the API is a joy to work with.",
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-8 rounded-3xl bg-glass backdrop-blur-xl border border-glass-border h-full">
        <Quote className="w-10 h-10 text-primary/30 mb-4" />

        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>

        <p className="text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

        <div className="flex items-center gap-4">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what industry leaders are saying about NexusAI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
