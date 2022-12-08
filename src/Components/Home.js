import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TITLE-IT</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            beatae!
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            quisquam consectetur, quis deleniti itaque, pariatur exercitationem
            assumenda incidunt et minus beatae ipsum ut accusamus aspernatur.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            nam, nemo nisi incidunt explicabo ex ipsam earum accusantium eius,
            molestiae architecto porro labore consequuntur neque. Consectetur
            minima pariatur vel animi enim quis ducimus ratione suscipit,
            accusamus fuga porro recusandae voluptate ipsa rerum autem beatae
            iure delectus doloremque veniam magni placeat? Et tempora, veritatis
            porro ipsam velit officia nemo libero mollitia accusamus!
            Perferendis cum recusandae neque magni error minus? Architecto,
            magni ut porro vero ipsa debitis suscipit repellat sed molestias
            veritatis ab ipsum cum, deleniti deserunt at recusandae labore aut
            voluptatibus quo quaerat. Voluptate repudiandae voluptates ad aut
            incidunt esse dolorem.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amzon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "1.3s",
              }}
            >
              <AiFillFacebook />
              <p>FaceBook</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
