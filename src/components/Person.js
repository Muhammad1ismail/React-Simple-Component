import React, { useState } from "react";

const persons = [
  {
    id: 1,
    img: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/292543486_585263546575720_1809521315119335123_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lxaJdgQA8sYAX8-Em_y&_nc_ht=scontent-fra5-2.xx&oh=00_AfCXOyWxf2YCsHxZNLkdgsO3X6698IwZ3OKUbm-PF3rKKA&oe=636D99FC",
    name: "Erling Halland",
    club: "Manchester City",
  },
  {
    id: 2,
    img: "https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-1/199385759_345470910277839_3988273979229903886_n.jpg?stp=dst-jpg_p320x320&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=g8Hq82zPEM4AX8Saw5D&_nc_ht=scontent-fra5-2.xx&oh=00_AfB2i4KB98iOqe-Rdw7kaaF9SMvs-m6YvBOe1_V6spJSTg&oe=63901AC5",
    name: "Leo Messi",
    club: "Barcelona",
  },
  {
    id: 3,
    img: "https://scontent-fra5-2.xx.fbcdn.net/v/t1.6435-9/56293785_10157194931137164_2353781398357147648_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=eRpAZtyezAMAX-0dGqT&_nc_oc=AQkpGJ02Rnd58aYeIa8ppjLB0wtCjWf2puXkhtLu3ep9315SLaP3S1nhKjUIU7QZSR8&_nc_ht=scontent-fra5-2.xx&oh=00_AfCj7_beP2IpPfM-PD75IYRhhVGhbVXkiRM85E1fw3ZYtA&oe=6390484F",
    name: "Christiano Ronaldo",
    club: "Manchester United",
  },
];

const Person = () => {
  const [person, setPerson] = useState(persons);

  return (
    <div>
      {person.map((singlePerson) => {
        const { id, img, name, club } = singlePerson;
        return (
          <section>
            <article className="article" key={id}>
              <img className="image" src={img} />
              <div className="nameSec">
                <p className="name">{name}</p>
                <i class="fa-sharp fa-solid fa-circle-check"></i>
              </div>
              <p className="club">{club}</p>

             
            </article>
          </section>
        );
      })}
    </div>
  );
};

export default Person;
