import axios from "axios";
import { useEffect, useState } from "react";
import { CardProfile } from "../../components/CardProfile";
import { PublicationCard } from "./Components/PublicationCard";
import { SearchPub } from "./Components/SearchPub";
import * as S from "./styles";

export type userDataProps = {
  avatar_url: string,
  followers: number,
  name: string,
  url: string,
  company: string,
  bio: string,
  login: string
}

export function Home() {
const [userData, setUserData] = useState<userDataProps>()

  async function fetch() {
    try {
      let response = await axios.get('https://api.github.com/users/kleubinho')

      let dataUser = response.data

      setUserData(dataUser)
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  console.log(userData)

  return (
    <S.Container>
      <S.Content>
        <CardProfile userData={userData}/>

        <SearchPub />

        <S.PubCards>
          <PublicationCard />
          <PublicationCard />
        </S.PubCards>
      </S.Content>
    </S.Container>
  );
}
