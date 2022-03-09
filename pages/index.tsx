import type { GetStaticProps, NextPage } from "next";
import { GetResults, Welcome } from "../api-types";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

const Home: NextPage<{ data: Welcome[] }> = ({ data }) => {
  return (
    <>
      <Header />
      <div className="page-container">
        <Sidebar />
        <MiddleSection data={data} />
        <RightSection />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
  );
  const data: GetResults = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
};

// const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
//   return (
//     <div className={styles.container}>
//       {characters.map((character) => {
//         return (
//           <>
//             <li>{character.id}</li>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch("https://rickandmortyapi.com/api/character");
//   const { results }: GetCharacterResults = await res.json();

//   return {
//     props: {
//       characters: results,
//     },
//   };
// };

export default Home;
