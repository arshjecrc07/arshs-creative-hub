import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowDown, Github, Linkedin, Menu, X, Code2, Braces, Terminal, Sparkles, GraduationCap, MapPin, BookOpen, Award, Mail, Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroArt from '@/assets/anime-rooftop.jpg';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'Arsh Chaturvedi — Student, Coder & Curious Mind' },
  { name: 'description', content: 'The personal portfolio of Arsh Chaturvedi, a first-year B.Tech CSE student at JECRC University. A new chapter in code, creativity, and learning.' },
  { property: 'og:title', content: 'Arsh Chaturvedi — My Developer Journey' },
  { property: 'og:description', content: 'Explore my education, learning interests, project ideas, and journey in computer science at JECRC University.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ] }), component: Portfolio,
});
const sections = [['home','Home'],['about','About'],['education','Education'],['skills','Skills'],['projects','Projects'],['certifications','Certifications'],['contact','Contact']];
const skills = [
 { icon: Code2, title: 'Programming foundations', subtitle: 'Building a strong base', tags: ['C / C++', 'Python', 'Problem solving'] },
 { icon: Braces, title: 'Web development', subtitle: 'Turning ideas into pages', tags: ['HTML', 'CSS', 'JavaScript'] },
 { icon: Terminal, title: 'Developer toolkit', subtitle: 'Getting familiar with the essentials', tags: ['Git & GitHub', 'VS Code', 'Command line'] },
 { icon: Sparkles, title: 'Beyond the code', subtitle: 'Growing a little every day', tags: ['Curiosity', 'Creativity', 'Collaboration'] },
];
function Chapter({ number, label }: { number: string; label: string }) { return <div className="chapter-kicker"><span>{number}</span><span>{label}</span></div>; }
function Portfolio() {
 const [menuOpen,setMenuOpen] = useState(false);
 const [active,setActive] = useState('home');
 const [copied,setCopied] = useState(false);
 const [copyError,setCopyError] = useState(false);
 useEffect(() => {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-15% 0px -65% 0px' });
  sections.forEach(([id]) => { const node = document.getElementById(id); if(node) observer.observe(node); });
  return () => observer.disconnect();
 }, []);
 async function copyMessage(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  try { await navigator.clipboard.writeText(`Hi Arsh!\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`); setCopied(true); setCopyError(false); }
  catch { setCopyError(true); }
 }
 return <>
  <header className="site-header">
   <div className="page-width flex h-full items-center justify-between gap-6">
    <a href="#home" className="wordmark" aria-label="Arsh home"><span className="wordmark-mark">{'< / >'}</span> arsh<span className="text-primary">.</span></a>
    <nav className="desktop-nav flex items-center gap-6" aria-label="Main navigation">{sections.map(([id,label]) => <a key={id} href={`#${id}`} className={`nav-link ${active === id ? 'active' : ''}`}>{label}</a>)}</nav>
    <div className="flex items-center gap-2"><Button asChild variant="outline" className="hidden sm:inline-flex"><a href="#contact">Let's talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>
   </div>
   {menuOpen && <nav className="border-b border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">{sections.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block py-3 text-sm">{label}</a>)}</nav>}
  </header>
  <main>
   <section id="home" className="hero">
    <img className="hero-art" src={heroArt} width={1920} height={1024} alt="Original anime illustration of a young student overlooking a sprawling city from a rooftop" fetchPriority="high" />
    <div className="page-width hero-content reveal">
     <div className="eyebrow"><span className="status-dot"/> A new chapter begins</div>
     <h1 className="hero-title">Arsh<br/><span>Chaturvedi.</span></h1>
     <p className="mb-4 font-display text-lg">Student. Coder. Curious mind.</p>
     <p className="hero-copy">First-year B.Tech CSE student at JECRC University.<br/>Exploring the world of code, one small adventure at a time.</p>
     <div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#projects">Explore my journey <ArrowUpRight/></a></Button><Button asChild variant="outline" size="lg"><a href="#about">A little about me <ArrowRight/></a></Button></div>
     <div className="mt-9 flex items-center gap-3 font-mono text-[10px] text-muted-foreground"><MapPin className="size-3"/> JECRC UNIVERSITY <span className="mx-1">/</span> FIRST-YEAR CSE</div>
    </div>
    <span className="anime-caption">自分の物語を書く — WRITE YOUR OWN STORY</span>
    <div className="page-width hero-bottom"><a href="#about" className="flex items-center gap-3"><ArrowDown className="size-3"/> SCROLL TO THE NEXT CHAPTER</a><span>01 / THE BEGINNING</span></div>
   </section>
   <section id="about" className="chapter">
    <div className="page-width grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-24">
     <div><Chapter number="01" label="The person behind the code"/><h2 className="section-title">Every great story<br/>starts with curiosity<span className="text-primary">.</span></h2><p className="body-copy">Hey, I'm Arsh — a computer science student at JECRC University, at the beginning of my developer journey. I’m drawn to the way a simple idea can become something real through code.</p><p className="body-copy mt-4">This is my space to explore, learn, and share what comes next. I’m approaching this chapter with an open mind, a willingness to start small, and the belief that progress matters more than perfection.</p></div>
     <div className="flex flex-col justify-center"><div className="profile-note"><span className="mb-4 block font-mono text-[10px] text-primary">MY MAIN CHARACTER ENERGY</span>“Not the strongest coder in the room.<br/>Just a little more curious every day.”</div><div className="mt-8 grid grid-cols-3"><div className="fact"><div className="fact-number">01</div><div className="fact-label">YEAR OF STUDY</div></div><div className="fact"><div className="fact-number">CSE</div><div className="fact-label">MY PATH</div></div><div className="fact"><div className="fact-number">∞</div><div className="fact-label">THINGS TO LEARN</div></div></div></div>
    </div>
   </section>
   <section id="education" className="chapter bg-secondary">
    <div className="page-width"><Chapter number="02" label="My origin story"/><div className="grid gap-10 md:grid-cols-2"><div><h2 className="section-title">Building my foundation.</h2><p className="body-copy max-w-sm">A new environment, new challenges, and a whole world of computer science to discover.</p></div><div className="border-l-2 border-primary pl-7"><div className="mb-5 flex items-center justify-between"><GraduationCap className="size-7 text-primary"/><span className="skill-tag">CURRENTLY STUDYING</span></div><h3 className="text-2xl">JECRC University</h3><p className="mt-3 text-sm">Bachelor of Technology</p><p className="body-copy">Computer Science & Engineering</p><div className="mt-5 flex items-center gap-2 font-mono text-xs text-primary"><span className="status-dot"/> First year · The journey has just begun</div></div></div></div>
   </section>
   <section id="skills" className="chapter"><div className="page-width"><Chapter number="03" label="My learning inventory"/><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><h2 className="section-title mb-0">Skills in the making.</h2><p className="body-copy">A learning roadmap, not a mastery claim.</p></div><div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">{skills.map(skill => <div key={skill.title} className="skill-item"><skill.icon className="mb-7 size-6 text-primary"/><h3 className="text-base font-medium">{skill.title}</h3><p className="mt-2 text-xs text-muted-foreground">{skill.subtitle}</p><div className="mt-5 flex flex-wrap gap-2">{skill.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}</div></div>)}</div></div></section>
   <section id="projects" className="chapter"><div className="page-width"><Chapter number="04" label="Side quests"/><div className="mb-9 flex flex-wrap items-end justify-between gap-4"><h2 className="section-title mb-0">Ideas for my next chapter.</h2><span className="font-mono text-[10px] text-muted-foreground">PROJECT CONCEPTS · NOT COMPLETED WORK</span></div><div className="grid gap-6 md:grid-cols-3">
    <article className="project-card"><div className="project-cover"><div className="mini-browser"><div className="mini-browser-bar"><i/><i/><i/></div><div className="px-5 py-6"><span className="font-mono text-[9px] text-primary">HELLO, WORLD.</span><div className="mt-3 font-display text-2xl">My little corner<br/>of the internet.</div><div className="mt-4 h-1 w-12 bg-primary"/></div></div></div><div className="p-6"><span className="font-mono text-[9px] text-primary">01 / PROJECT IDEA</span><h3 className="mt-3 text-xl">Personal portfolio</h3><p className="body-copy mt-2 text-xs">A place to document my learning, share my work, and make the journey my own.</p><div className="mt-5 flex gap-2"><span className="skill-tag">Web</span><span className="skill-tag">Design</span></div></div></article>
    <article className="project-card"><div className="project-cover terminal"><div className="w-4/5 font-mono text-xs leading-7"><p>~/arsh/learning $ python</p><p className="opacity-60"># small tools. big curiosity.</p><p>&gt; choose your adventure:</p><p className="pl-4">01. calculate<br/>02. play<br/>03. explore _</p></div></div><div className="p-6"><span className="font-mono text-[9px] text-primary">02 / PROJECT IDEA</span><h3 className="mt-3 text-xl">Python playground</h3><p className="body-copy mt-2 text-xs">Small scripts, simple games, and practical tools to turn programming basics into practice.</p><div className="mt-5 flex gap-2"><span className="skill-tag">Python</span><span className="skill-tag">Logic</span></div></div></article>
    <article className="project-card"><div className="project-cover study"><div className="flex items-center gap-5"><BookOpen className="size-12 text-primary"/><div><span className="font-mono text-[9px] text-primary">THE DAILY QUEST</span><div className="mt-2 font-display text-2xl">Learn. Track.<br/>Level up.</div></div></div></div><div className="p-6"><span className="font-mono text-[9px] text-primary">03 / PROJECT IDEA</span><h3 className="mt-3 text-xl">Study quest</h3><p className="body-copy mt-2 text-xs">A student-friendly study tracker for organizing goals and celebrating small wins.</p><div className="mt-5 flex gap-2"><span className="skill-tag">JavaScript</span><span className="skill-tag">Productivity</span></div></div></article>
   </div></div></section>
   <section id="certifications" className="chapter"><div className="page-width grid gap-9 md:grid-cols-2"><div><Chapter number="05" label="Milestones ahead"/><h2 className="section-title">Learning is the real reward.</h2><p className="body-copy max-w-md">There’s plenty left to discover. This chapter will grow with the courses I complete and the milestones I earn.</p></div><div className="flex items-center gap-6 border-y border-border py-8"><Award className="size-12 shrink-0 text-primary"/><div><h3 className="text-lg">The collection starts here</h3><p className="body-copy mt-2 text-xs">No certifications listed yet.</p><span className="mt-4 inline-block font-mono text-[10px] text-primary">NEXT UP: LEARN → PRACTICE → GROW</span></div></div></div></section>
   <section id="contact" className="chapter contact-section"><div className="page-width grid gap-12 md:grid-cols-2 md:gap-24"><div><Chapter number="06" label="Let's cross paths"/><h2 className="contact-title">Great things start<br/>with a <span className="text-primary">hello.</span></h2><p className="body-copy mt-6 max-w-sm">A fellow learner, a potential collaborator, or just someone with an interesting idea? I’d love to connect.</p><div className="mt-7"><div className="social-row"><label className="flex items-center gap-3"><Github className="size-4"/> GitHub</label><span className="font-mono text-[10px] text-muted-foreground">PROFILE COMING SOON</span></div><div className="social-row"><label className="flex items-center gap-3"><Linkedin className="size-4"/> LinkedIn</label><span className="font-mono text-[10px] text-muted-foreground">PROFILE COMING SOON</span></div><div className="social-row"><label className="flex items-center gap-3"><Mail className="size-4"/> Email</label><span className="font-mono text-[10px] text-muted-foreground">ADDRESS COMING SOON</span></div></div></div><form onSubmit={copyMessage} className="self-center"><h3 className="mb-2 text-xl">Leave a little hello.</h3><p className="mb-6 text-xs leading-6 text-muted-foreground">Email details are not available yet. Save your message to share when they’re added.</p><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs">Your name<input required name="name" className="field mt-2" placeholder="Your name" maxLength={100}/></label><label className="text-xs">Your email<input required type="email" name="email" className="field mt-2" placeholder="you@example.com"/></label></div><label className="mt-5 block text-xs">Your message<textarea required name="message" rows={5} className="field mt-2 resize-y" placeholder="Hey Arsh, let's build something..." maxLength={5000}/></label><Button type="submit" className="mt-5" size="lg">{copied ? <><Check/> Message copied</> : <><Copy/> Copy message</>}</Button><p aria-live="polite" className="mt-3 text-xs text-primary">{copied ? 'Saved to your clipboard. No message has been sent.' : copyError ? 'Clipboard unavailable. Please select and copy your message manually.' : ''}</p></form></div></section>
  </main>
  <footer className="page-width flex flex-wrap items-center justify-between gap-5 py-7"><span className="font-mono text-[10px] text-muted-foreground">© 2026 ARSH CHATURVEDI</span><span className="font-mono text-[10px] text-muted-foreground">A LITTLE CODE. A LITTLE ANIME. A LOT OF CURIOSITY.</span><Button asChild variant="ghost" size="icon"><a href="#home" aria-label="Back to top"><ArrowUpRight/></a></Button></footer>
 </>;
}
