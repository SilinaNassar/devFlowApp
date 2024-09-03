import HomeFilters from "@/components/Home/HomeFilters";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Link from "next/link";
import React from "react";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResults from "@/components/shared/NoResults";
import { getQuestions } from "@/lib/actions/question.action";

const questions = [
  {
    _id: "question1",
    title: "How does the JavaScript event loop work?",
    tags: [
      { _id: "tag1", name: "JavaScript" },
      { _id: "tag2", name: "Asynchronous" },
      { _id: "tag3", name: "Event Loop" },
    ],
    author: {
      _id: "author1",
      name: "Alice Johnson",
      picture: "/assets/images/logo-light.svg",
      clerkId: "clerk_12345",
    },
    upvotes: 132333,
    views: 1800,
    answers: [
      {
        _id: "answer1",
        author: {
          _id: "author2",
          name: "Bob Smith",
          picture: "/public/assets/icons/avatar.svg",
          clerkId: "clerk_67890",
        },
        content:
          "The event loop is a mechanism that JavaScript uses to handle asynchronous operations by executing callbacks in a non-blocking manner.",
        createdAt: new Date("2023-07-21T10:15:00Z"),
      },
    ],
    createdAt: new Date("2023-07-20T09:00:00Z"),
  },
  {
    _id: "question2",
    title: "What is the difference between let and const in JavaScript?",
    tags: [
      { _id: "tag4", name: "JavaScript" },
      { _id: "tag5", name: "ES6" },
    ],
    author: {
      _id: "author3",
      name: "Charlie Brown",
      picture: "/assets/icons/avatar.svg",
      clerkId: "clerk_54321",
    },
    upvotes: 1333,
    views: 2400,
    answers: [
      {
        _id: "answer2",
        author: {
          _id: "author4",
          name: "David Green",
          picture: "https://example.com/images/david_green.jpg",
          clerkId: "clerk_09876",
        },
        content:
          "`let` allows you to declare variables that can be reassigned, while `const` is used for variables that should not be reassigned after their initial assignment.",
        createdAt: new Date("2023-08-02T14:25:00Z"),
      },
      {
        _id: "answer3",
        author: {
          _id: "author5",
          name: "Eve White",
          picture: "https://example.com/images/eve_white.jpg",
          clerkId: "clerk_11223",
        },
        content:
          "`let` is block-scoped and `const` is also block-scoped, but `const` must be initialized at the time of declaration.",
        createdAt: new Date("2023-08-03T09:45:00Z"),
      },
    ],
    createdAt: new Date("2023-07-29T12:00:00Z"),
  },
];

const Home = async () => {
  const result = await getQuestions({});
  console.log(result.questions);

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          imgSrc="/assets/icons/search.svg"
          iconPosition="left"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((item) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <NoResults
            title="There is no question to show"
            description=" Be the first to break the silence! 🚀 Ask the kickstart the discussion.
         our query could be next big thing others learn from.Get involved"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
