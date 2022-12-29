import React, { useState } from "react";
import Head from "next/head";
import { Card, Navigation } from "../components";
import { getUsers } from "../services/services";
import { User } from "../models/user.models";

import styles from "../styles/Home.module.css";

const HomePage = () => {
  const [list, setList] = useState([]);

  const getName = async () => {
    const users = await getUsers();

    setList(users);
  };

  const clear = () => {
    setList([]);
  };

  return (
    <main className="p-4">
      <Head>
        <title>IPx</title>
        <meta name="description" content="IPx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <h1 className="text-3xl text-green-600 mt-4 mb-8">IPx Home</h1>

      <button
        onClick={getName}
        className="mr-2 px-4 py-3 leading-4 bg-green-600 hover:bg-green-700 font-medium rounded-md text-white cursor-pointer duration-300"
      >
        Get Name
      </button>

      <button
        onClick={clear}
        className="mr-2 px-4 py-3 leading-4 bg-green-600 hover:bg-green-700 font-medium rounded-md text-white cursor-pointer duration-300"
      >
        Clear
      </button>

      <p className="mt-3">
        Click on <strong>Get Name</strong> to fetch API data
      </p>

      {Boolean(list.length) && (
        <section className="mt-5">
          <h2>Application Users</h2>

          <ul className="pl-5">
            {list.map((listItem: User) => (
              <li key={listItem.id} className="list-disc">
                <Card data={listItem} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};

export default HomePage;
