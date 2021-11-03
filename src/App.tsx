import { FormEvent, useEffect, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import styles from './App.module.scss';

type GithubUser = {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}

type SocialMedia = {
  github: string;
  youtube: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

function App() {
  const [githubUser, setGithubUser] = useState<GithubUser | null>(null);
  const [socialMedia, setSocialMedia] = useState<SocialMedia | null>(null);
  const [github, setGithub] = useState('');
  const [youtube, setYoutube] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const elementMain = document.querySelector('.main') as HTMLElement | HTMLElement[]
  const elementAllMain = document.querySelector('.main') as HTMLElement | HTMLElement[]
  VanillaTilt.init(elementMain, {
    max: 25,
    speed: 400,
  });

  //It also supports NodeList
  VanillaTilt.init(elementAllMain);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setSocialMedia({
      github,
      youtube,
      instagram,
      facebook,
      twitter
    });

    if (github) {
      const url = `https://api.github.com/users/${github}`

      fetch(url)
        .then(response => response.json())
        .then(data => { setGithubUser(data) });
    }

  }

  return (
    <main data-tilt data-tilt-reverse className="main">
      {!!socialMedia ? (
        <div className={styles.container}>
          <div className={styles.avatar}>
            <span>
              <img src="images/build.svg" alt="Selo Rocketseat" />
            </span>
            <img src={githubUser?.avatar_url} alt={githubUser?.name} />
          </div>
          <h1 id='userName'>{githubUser?.name}</h1>
          <a id="userLink" href={githubUser?.html_url} target="_blank">
            <img id="userImage" src="/images/github.svg" alt="Github Icon" />
            <span id="userLogin">{githubUser?.login}</span>
          </a>

          <p id="userBio">
            {githubUser?.bio}
          </p>

          <ul id="socialLinks">
            {socialMedia.youtube && (
              <li className="youtube">
                <a href={`https://youtube.com/channel/${socialMedia.youtube}`} target="_blank">
                  <img src="images/youtube.svg" alt="Youtube" />
                </a>
              </li>
            )}
            {socialMedia.instagram && (
              <li className="instagram">
                <a href={`https://instagram.com/${socialMedia.instagram}`} target="_blank">
                  <img src="images/instagram.svg" alt="instagram" />
                </a>
              </li>
            )}
            {socialMedia.facebook && (
              <li className="facebook">
                <a href={`https://facebook.com/${socialMedia.facebook}`} target="_blank">
                  <img src="images/facebook.svg" alt="facebook" />
                </a>
              </li>
            )}
            {socialMedia.twitter && (
              <li className="twitter">
                <a href={`https://twitter.com/${socialMedia.twitter}`} target="_blank">
                  <img src="images/twitter.svg" alt="twitter" />
                </a>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <label>Github</label>
            <input
              type="text"
              placeholder="Ex.: Rodrigosaantos"
              value={github}
              onChange={event => setGithub(event.target.value)}
            />
            <label>Youtube</label>
            <input
              type="text"
              placeholder="ID: fshjkldafhjaslkd"
              value={youtube}
              onChange={event => setYoutube(event.target.value)}
            />
            <label>Instagram</label>
            <input
              type="text"
              placeholder="Ex.: rodzstos"
              value={instagram}
              onChange={event => setInstagram(event.target.value)}
            />
            <label>Facebook</label>
            <input
              type="text"
              placeholder="Ex.: rodzstos"
              value={facebook}
              onChange={event => setFacebook(event.target.value)}
            />
            <label>Twitter</label>
            <input
              type="text"
              placeholder="Ex.: rodzstos"
              value={twitter}
              onChange={event => setTwitter(event.target.value)}
            />
            <button type='submit'>Fazer Cartão</button>
          </form>
        </div>
      )}

    </main>
  )
}

export default App
