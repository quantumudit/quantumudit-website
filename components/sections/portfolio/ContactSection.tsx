'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { getProfile } from '@/lib/data';

export default function ContactSection() {
    const profile = getProfile();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setIsSubmitted(false);
            }, 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gray-50 dark:bg-gray-900"
        >
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </div>

                <Separator className="mb-12" />

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Contact Information</CardTitle>
                                <CardDescription>Feel free to reach out through any channel</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {profile.social.email && (
                                    <a
                                        href={`mailto:${profile.social.email}`}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                    >
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                            <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                                {profile.social.email}
                                            </p>
                                        </div>
                                    </a>
                                )}

                                {profile.social.linkedin && (
                                    <a
                                        href={profile.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                    >
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                                            <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">Connect with me</p>
                                        </div>
                                    </a>
                                )}

                                {profile.social.github && (
                                    <a
                                        href={profile.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                    >
                                        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform">
                                            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">GitHub</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">View my code</p>
                                        </div>
                                    </a>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Availability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {profile.availability.message || 'Available for opportunities'}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Send Me a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and I'll get back to you as soon as possible
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {isSubmitted ? (
                                    <div className="py-12 text-center">
                                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Thank you for reaching out. I'll respond soon!
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <Label htmlFor="name">Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                className={errors.email ? 'border-red-500' : ''}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                                            )}
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <Label htmlFor="subject">Subject *</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="What's this about?"
                                                className={errors.subject ? 'border-red-500' : ''}
                                            />
                                            {errors.subject && (
                                                <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell me more about your project or question..."
                                                rows={6}
                                                className={errors.message ? 'border-red-500' : ''}
                                            />
                                            {errors.message && (
                                                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin mr-2">⏳</span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                </div>

            </div>
        </section>
    );
}