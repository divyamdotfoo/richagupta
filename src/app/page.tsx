import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import richu from "../../public/richu.jpg";
import { cn } from "@/utils/cn";
import React from "react";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const skills = {
  "Cloud Platforms": [
    "AWS security",
    "Azure security",
    "Google Cloud security",
  ],
  "Network Security": [
    "Firewall Configuration",
    "VPN Implementation",
    "Network Segmentation",
  ],
};
const EXPERIENCE = {
  IKEA: {
    date: "Jan 2022 - Present",
    content: [
      "Implemented a robust cloud security framework at IKEA IT AB, reducing vulnerabilities by 30% through proactive threat detection using tools like AWS GuardDuty and Azure Security Center.",
      "Led a team in deploying a scalable identity and access management solution, managing over 5000 user accounts across multiple cloud platforms with a 99.9% uptime using Okta and Azure AD.",
    ],
  },
  ALTRAN: {
    date: "May 2020 - Jan 2022",
    content: [
      "Designed and deployed automated security controls using GCP Firewall Rules and Cloud Armor, improving network security for critical applications.",
      "Conducted security assessments and remediation for GCP environments, ensuring compliance with regulatory requirements such as PCI DSS and HIPAA.",
    ],
  },
  "Sopra Steria": {
    date: "Feb 2019 - May 2020",
    content: [
      "Developed and executed penetration testing strategies using tools like Burp Suite and OWASP ZAP, enhancing the resilience of Sopra Steria's client applications against cyber attacks.",
      "Collaborated with development teams to integrate security practices into the SDLC, ensuring secure coding standards and continuous vulnerability assessments",
    ],
  },
};
const INTRO =
  "Richa Gupta is a seasoned Cyber Security professional specializing in Cloud Security. Currently, as a Senior Cyber Engineer at IKEA IT AB, she brings extensive experience from her roles as a GCP Security Engineer at Altran and in application security testing at Sopra Steria.";

export default function Page() {
  return (
    <HeroHighlight className="">
      <Contact />
      <Richa />
      <LastUpdated />
    </HeroHighlight>
  );
}

function Richa() {
  return (
    <div className=" xl:max-w-6xl lg:max-w-4xl flex flex-col md:flex-row md:pt-2 pt-4 items-start justify-around">
      <div>
        <div className=" flex flex-col gap-2 w-full">
          <div className="flex md:flex-col flex-row items-center md:gap-2 gap-4 pb-2 md:pb-0">
            <Image
              alt="profile picture of Richa Gupta"
              src={richu}
              className=" rounded-full xl:w-52 xl:h-52 lg:w-40 lg:h-40 md:w-32 md:h-32 w-28 h-28"
              placeholder="blur"
            />
            <div className=" flex flex-col md:items-center items-start md:gap-2 gap-3">
              <h1 className={cn(playfair.className, "text-4xl font-semibold")}>
                Richa Gupta
              </h1>
              <Highlight>
                <h2 className="font-medium">Cybersecuity Engineer</h2>
              </Highlight>
            </div>
          </div>

          <Header>Expertise</Header>
          <div className=" pl-2 flex flex-col gap-2">
            {Object.keys(skills).map((skill) => (
              <div
                className=" flex w-full  justify-between gap-8 relative items-start"
                key={skill}
              >
                <SkillHeading>{skill}</SkillHeading>
                <ul className="pt-1">
                  {skills[skill as keyof typeof skills].map((s) => (
                    <Skill key={s}>{s}</Skill>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-10 basis-1/2 md:pt-0 pt-4">
        <div>
          <Header>About</Header>
          <h2 className=" pt-2 tracking-wide font-medium text-lg">{INTRO}</h2>
        </div>
        <div>
          <Header>Experience</Header>
          <div className=" flex flex-col gap-2 pl-2">
            {Object.keys(EXPERIENCE).map((exp) => (
              <div
                className=" flex w-full  justify-between gap-8 relative items-start"
                key={exp}
              >
                <ExperienceHeading
                  name={exp}
                  date={EXPERIENCE[exp as keyof typeof EXPERIENCE].date}
                />
                <ul className="pt-1 basis-2/3">
                  {EXPERIENCE[exp as keyof typeof EXPERIENCE].content.map(
                    (z, i) => (
                      <Skill key={i}>
                        <p className=" tracking-wide py-2">{z}</p>
                      </Skill>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Skill({ children }: { children: React.ReactNode }) {
  return <li className=" list-disc text-base">{children}</li>;
}

function SkillHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className=" relative text-xl font-medium after:content-[''] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:absolute after:left-0 after:-bottom-[2px]">
      {children}
    </p>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("self-start  pt-1  w-full flex items-center gap-2")}>
      <p className="text-2xl font-semibold">{children}</p>
      <div className=" flex items-center w-full opacity-90">
        <div className=" w-2 h-2 rounded-full bg-indigo-500"></div>
        <div className=" w-full h-[2px] bg-white"></div>
        <div className=" w-2 h-2 rounded-full  bg-purple-500"></div>
      </div>
    </div>
  );
}

function ExperienceHeading({ date, name }: { date: string; name: string }) {
  return (
    <div>
      <SkillHeading>{name}</SkillHeading>
      <p className=" text-xs font-semibold opacity-70 pt-1">{date}</p>
    </div>
  );
}

function Contact() {
  return (
    <div className=" flex items-center gap-4 justify-end">
      <Link
        href={"https://www.linkedin.com/in/richa-gupta-366b6274/"}
        target="_blank"
      >
        <Linkedin className=" w-6 h-6 translate-y-[3px]" />
      </Link>
      <Link href={"mailto:guptaricha8734@gmail.com"} target="_blank">
        <Mail className=" w-6 h-6 translate-y-1" />
      </Link>
      <Link href={""}>
        <SkillHeading className=" text-base">Resume</SkillHeading>
      </Link>
    </div>
  );
}

function LastUpdated() {
  return (
    <p className="font-semibold text-sm pt-4 text-center">
      <span className=" pr-2">Last updated</span>
      {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}
    </p>
  );
}
