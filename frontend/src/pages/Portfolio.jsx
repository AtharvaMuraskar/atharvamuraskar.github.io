import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Star, GitFork, Calendar, Award, Briefcase, Code2, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { personalInfo, skills, experiences, projects, education, certifications, githubRepos } from '../data/portfolioData';

const Portfolio = () => {
  const [repos, setRepos] = useState(githubRepos);

  // Code snippet for hero section
  const codeSnippet = `const developer = {
  name: '${personalInfo.name}',
  title: '${personalInfo.title}',
  skills: ${JSON.stringify(skills.slice(0, 8).map(s => s.name), null, 2)},
  passionateAbout: ['Web Development', 'Cloud Computing', 'Problem Solving'],
  hireable: true,
  contact: () => {
    return '${personalInfo.email}';
  }
};`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[0]}
          </h1>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors duration-300">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a>
          </div>
          {/* Mobile menu - simplified for now */}
          <div className="flex md:hidden gap-4">
            <a href="#contact" className="text-teal-400 text-sm">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <p className="text-teal-400 text-sm md:text-base lg:text-lg font-medium">Hello, I'm</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight break-words">
                  {personalInfo.name}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-400 font-light leading-snug break-words">
                  {personalInfo.title}
                </p>
              </div>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white text-sm md:text-base">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild className="border-teal-500 text-teal-400 hover:bg-teal-500/10 text-sm md:text-base">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
              <div className="flex gap-3 md:gap-4 pt-2">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-teal-400 transition-colors">
                  <Mail className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <Github className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-slate-800 shadow-2xl">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-slate-500 text-xs md:text-sm ml-2 md:ml-4">developer.js</span>
                </div>
                <pre className="text-[10px] sm:text-xs md:text-sm text-slate-300 overflow-x-auto font-mono whitespace-pre-wrap break-words">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
              About <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <Separator className="mb-8 md:mb-12 bg-slate-800 mx-auto w-20 md:w-24" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300">
                <CardHeader className="pb-3">
                  <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-teal-400 mb-2" />
                  <CardTitle className="text-slate-100 text-base md:text-lg lg:text-xl">Experience</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base">6+ years in web development and AI products</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300">
                <CardHeader className="pb-3">
                  <Code2 className="h-6 w-6 md:h-8 md:w-8 text-teal-400 mb-2" />
                  <CardTitle className="text-slate-100 text-base md:text-lg lg:text-xl">Projects</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base">OTT platforms, AI tools & enterprise apps</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-3">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-teal-400 mb-2" />
                  <CardTitle className="text-slate-100 text-base md:text-lg lg:text-xl">Expertise</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base">Full-stack, AI integration & cloud tech</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 md:mt-12 text-center px-2">
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 md:gap-8 text-slate-400 text-xs sm:text-sm md:text-base">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-teal-400 flex-shrink-0" />
                  <span className="break-words">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 text-teal-400 flex-shrink-0" />
                  <span className="break-all text-xs sm:text-sm">{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Technical <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <Separator className="mb-8 md:mb-12 bg-slate-800 mx-auto w-24" />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 md:p-4 hover:border-teal-500/50 hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <p className="text-slate-100 font-medium text-center text-sm md:text-base">{skill.name}</p>
                  <p className="text-xs text-slate-500 text-center mt-1 capitalize">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-20 px-4 md:px-6 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Work <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <Separator className="mb-8 md:mb-12 bg-slate-800 mx-auto w-24" />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800"></div>
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative md:pl-20 pb-8 md:pb-12 last:pb-0">
                  <div className="hidden md:block absolute left-5 top-2 w-6 h-6 rounded-full bg-teal-500 border-4 border-slate-950"></div>
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-slate-100 text-lg md:text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-teal-400 font-medium mt-1">{exp.company}</CardDescription>
                          {exp.location && (
                            <p className="text-slate-500 text-sm mt-1">{exp.location}</p>
                          )}
                        </div>
                        {exp.current && (
                          <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/50 self-start">Current</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 text-sm md:text-base">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <Separator className="mb-8 md:mb-12 bg-slate-800 mx-auto w-24" />
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
            {projects.filter(p => p.featured).map((project) => (
              <Card key={project.id} className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-slate-100 flex items-center gap-2 text-lg md:text-xl">
                    <Code2 className="h-5 w-5 text-teal-400 flex-shrink-0" />
                    <span className="break-words">{project.name}</span>
                  </CardTitle>
                  <CardDescription className="text-teal-400 text-sm md:text-base">{project.role} @ {project.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Projects */}
          <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-100">
              More <span className="text-teal-400">Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <Card key={project.id} className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-slate-100 flex items-center gap-2 text-base md:text-lg">
                      <Code2 className="h-4 w-4 md:h-5 md:w-5 text-teal-400 flex-shrink-0" />
                      <span className="break-words">{project.name}</span>
                    </CardTitle>
                    <CardDescription className="text-teal-400 text-sm">{project.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-400 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 text-sm"
                      >
                        Visit Site <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub Repositories */}
          <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-100">
              GitHub <span className="text-teal-400">Repositories</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02] h-full">
                    <CardHeader>
                      <CardTitle className="text-slate-100 flex items-center gap-2 text-base md:text-lg">
                        <Github className="h-4 w-4 md:h-5 md:w-5 text-teal-400 flex-shrink-0" />
                        <span className="break-all">{repo.name}</span>
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4 ml-auto text-slate-500 flex-shrink-0" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-400 text-sm">{repo.description}</p>
                      <div className="flex items-center gap-4 text-xs md:text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{repo.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{repo.forks}</span>
                        </div>
                        <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
                          {repo.language}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Education & <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <Separator className="mb-12 bg-slate-800 mx-auto w-24" />
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education */}
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-teal-400 mt-1" />
                  <div>
                    <CardTitle className="text-slate-100 text-xl">{education.degree}</CardTitle>
                    <CardDescription className="text-teal-400 mt-2">{education.institution}</CardDescription>
                    <p className="text-slate-500 text-sm mt-1">{education.affiliation}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
                <Award className="h-6 w-6 text-teal-400" />
                Professional Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-teal-500/50 transition-all duration-300"
                  >
                    <p className="text-slate-300">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <Separator className="mb-8 md:mb-12 bg-slate-800 mx-auto w-20 md:w-24" />
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-slate-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 px-4">
              Feel free to reach out for collaborations, opportunities, or just to connect!
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <a href={`mailto:${personalInfo.email}`} className="group">
                <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="flex flex-col items-center gap-3 md:gap-4 p-4 sm:p-6 md:p-8 text-center">
                    <div className="p-3 md:p-4 rounded-full bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                      <Mail className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 mb-2">Email</h3>
                      <p className="text-xs sm:text-sm md:text-base text-slate-400 break-all px-2">{personalInfo.email}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
              
              <a href={`tel:${personalInfo.phone}`} className="group">
                <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <CardContent className="flex flex-col items-center gap-3 md:gap-4 p-4 sm:p-6 md:p-8 text-center">
                    <div className="p-3 md:p-4 rounded-full bg-teal-500/10 group-hover:bg-teal-500/20 transition-colors">
                      <Phone className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 mb-2">Phone</h3>
                      <p className="text-xs sm:text-sm md:text-base text-slate-400">{personalInfo.phone}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
              
              <Card className="bg-slate-900/50 border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                <CardContent className="flex flex-col items-center gap-3 md:gap-4 p-4 sm:p-6 md:p-8 text-center">
                  <div className="p-3 md:p-4 rounded-full bg-teal-500/10">
                    <MapPin className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 mb-2">Location</h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-400 px-2">{personalInfo.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 md:mt-12 text-center">
              <div className="flex justify-center gap-4 md:gap-6">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-full bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300"
                >
                  <Github className="h-5 w-5 md:h-6 md:w-6 text-slate-400 hover:text-teal-400" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3 rounded-full bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-slate-400 hover:text-teal-400" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 md:p-3 rounded-full bg-slate-900/50 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-900 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-slate-400 hover:text-teal-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-6 md:py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs md:text-sm text-center md:text-left">
              © 2025 {personalInfo.name}. Built with React & FastAPI.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-teal-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;