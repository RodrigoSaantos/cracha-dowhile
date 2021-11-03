import styles from './App.module.scss';

function App() {

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <span>
            <img src="images/build.svg" alt="Selo Rocketseat" />
          </span>
          <img src="https://github.com/rodrigosaantos.png" alt="Rodrigo Santos" />
        </div>
        <h1 id='userName'>Rodrigo Santos</h1>
        <a id="userLink" href="https://github.com/rodrigosaantos" target="_blank">
          <img id="userImage" src="/images/github.svg" alt="RodrigoSaantos" />
          <span id="userLogin">RodrigoSaantos</span>
        </a>

        <p id="userBio">
          An instructor focused on helping people start programming for web
        </p>

        <ul id="socialLinks">
          <li className="youtube">
            <a href="https://youtube.com" target="_blank">
              <img src="images/youtube.svg" alt="Youtube" />
            </a>
          </li>
          <li className="instagram">
            <a href="https://instagram.com" target="_blank">
              <img src="images/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li className="facebook">
            <a href="https://facebook.com" target="_blank">
              <img src="images/facebook.svg" alt="facebook" />
            </a>
          </li>
          <li className="twitter">
            <a href="https://twitter.com" target="_blank">
              <img src="images/twitter.svg" alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default App
