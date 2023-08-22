import React from 'react';
import Image from 'next/image';
import classes from './first-section.module.css';

export default function FirstSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <Image
            src="/main.png"
            width={2000}
            height={2000}
            alt="Picture of the author"
          />
        </div>
        <div className={classes.text}>
          <h1>
            В рождестве девство сохранила еси, во успении мира не оставила еси,
            Богородице, преставиласz еси к животу, Мати сущи Живота, и молитвами
            Твоими избавляеши от смерти души наша
          </h1>
          <p>
            У різдві дівство зберегла Єси, в успінні ж світу не залишила Єси,
            Богородице, перейшла Ти до життя, бо Ти Мати Життя, і молитвами
            Твоїми визволяєш від смерті душі наші
          </p>
        </div>
      </div>
    </section>
  );
}
