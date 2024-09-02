"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppsView() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const ProjectContent = ({ text, imageUrl, altText }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {text.title}
        </span>{" "}
        {text.description}
      </p>
      <Image
      style={{marginTop: "20px", borderRadius: "20px"}}
        src={imageUrl}
        alt={altText}
        height={600}
        width={600}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Health",
    title: "StrivePD",
    src: "/strivepd.png",
    content: (
      <ProjectContent
        text={{
          title: "StrivePD: Empowering Parkinson's Patients.",
          description:
            "StrivePD offers tools to monitor symptoms, track progress, and manage Parkinson's Disease. Developed in collaboration with patients, it provides actionable insights and integrates with Apple's Health ecosystem.",
        }}
        imageUrl="/strivepd.png" 
        altText="StrivePD App Mockup"
      />
    ),
  },
  {
    category: "Education",
    title: "ExamCram",
    src: "/examcram.png",
    content: (
      <ProjectContent
        text={{
          title: "Revolutionize Your Study Habits with ExamCram.",
          description:
            "ExamCram helps students learn more effectively by generating personalized quizzes, flashcards, and AI-driven study guides. With over 11,000 downloads, it's a favorite among tech-savvy learners.",
        }}
        imageUrl="/examcram.png" // Local image path
        altText="ExamCram App Mockup"
      />
    ),
  },
  {
    category: "Accessibility",
    title: "PingPath",
    src: "/pingpath.png",
    content: (
      <ProjectContent
        text={{
          title: "PingPath: Navigating with Ease.",
          description:
            "PingPath is designed to help visually impaired users navigate spaces using spatial audio guidance and a custom pathfinding algorithm. User-centered design ensures a smooth and accessible experience.",
        }}
        imageUrl="/pingpath.png" 
        altText="PingPath App Mockup"
      />
    ),
  },
  {
    category: "Health Tech",
    title: "Covid Watch",
    src: "/covid-watch.png", 
    content: (
      <ProjectContent
        text={{
          title: "Covid Watch: Protecting Communities During the Pandemic.",
          description:
            "Covid Watch utilized Exposure Notifications to help reduce the spread of Covid-19 by encouraging precautions such as isolation or mask-wearing after potential exposure. It was a groundbreaking effort during the pandemic to leverage technology for public health.",
        }}
        imageUrl="/covid-watch.png" 
        altText="Covid Watch App Mockup"
      />
    ),
  },
  {
    category: "Fitness",
    title: "PodPosture/PodPower",
    src: "/podposture.png", 
    content: (
      <ProjectContent
        text={{
          title: "PodPosture & PodPower: Improve Your Posture and Fitness.",
          description:
            "Leveraging AirPods motion sensors, PodPosture helps users maintain good posture, while PodPower counts workout reps and even tracks hydration. These apps encourage healthier habits using everyday tech.",
        }}
        imageUrl="/podposture.png" 
        altText="PodPosture and PodPower App Mockup"
      />
    ),
  },
  {
    category: "Health & Wellness",
    title: "WalkLock",
    src: "/walklock.png", // Path to your local image
    content: (
      <ProjectContent
        text={{
          title: "WalkLock: Encouraging Daily Movement.",
          description:
            "WalkLock motivates users to stay active by locking certain apps until they complete a daily walk. A unique way to merge digital wellness with physical activity.",
        }}
        imageUrl="/walklock.png" // Local image path
        altText="WalkLock App Mockup"
      />
    ),
  },
  {
    category: "Parkinson's Care",
    title: "Rhythm",
    src: "/rhythm.png", // Path to your local image
    content: (
      <ProjectContent
        text={{
          title: "Rhythm: Cueing for Parkinson's Patients.",
          description:
            "Rhythm provides rhythmic cues to help people with Parkinson's Disease manage daily activities more smoothly. Its adaptive audio cues help maintain consistency in movements, aiding in tasks like walking.",
        }}
        imageUrl="/rhythm.png" // Local image path
        altText="Rhythm App Mockup"
      />
    ),
  },
  {
    category: "Health Research",
    title: "Vito",
    src: "/vito.png", // Path to your local image
    content: (
      <ProjectContent
        text={{
          title: "Vito: Pioneering Early Disease Detection.",
          description:
            "Vito was an open-source project focused on early detection of infectious diseases using biometric data. With a community-driven approach and privacy at its core, Vito aimed to increase adoption by building trust. Though the project is no longer active, it was a meaningful exploration in digital health.",
        }}
        imageUrl="/vito.png" // Local image path
        altText="Vito App Mockup"
      />
    ),
  },
];