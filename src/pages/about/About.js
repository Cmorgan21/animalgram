import React from 'react';
import styles from '../../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>AnimalGram</h1>
      <h2 className={styles.subheading}>About</h2>
      <p className={styles.paragraph}>
        Welcome to AnimalGram, the ultimate social platform for animal lovers! Here, you can share
        your love for animals by posting pictures and stories of your beloved pets. Whether you
        have a playful puppy, a curious cat, a talkative parrot, or any other animal companion,
        AnimalGram is the perfect place to showcase their unique personalities and adorable moments.
      </p>
      <h3 className={styles.subheading}>Features</h3>
      <ul className={styles.featuresList}>
        <li className={styles.paragraph}><span className={styles.bold}>Post Updates:</span> Share photos and updates about your pets.</li>
        <li className={styles.paragraph}><span className={styles.bold}>Follow Users:</span> Connect with other animal enthusiasts and follow their updates.</li>
        <li className={styles.paragraph}><span className={styles.bold}>Like and Comment:</span> Engage with posts by liking and commenting on them.</li>
        <li className={styles.paragraph}><span className={styles.bold}>Search:</span> Discover new pets and users through our search functionality.</li>
        <li className={styles.paragraph}><span className={styles.bold}>Profile Customization:</span> Personalize your profile with your pet's pictures and information.</li>
      </ul>
      <h3 className={styles.subheading}>Our Mission</h3>
      <p className={styles.paragraph}>
        At AnimalGram, our mission is to create a vibrant community where animal lovers can connect, share, and celebrate
        the joy that animals bring into our lives. We believe that every animal has a story to tell, and we are here to
        provide a platform for those stories to be shared with the world.
      </p>
      <h3 className={styles.subheading}>Join Us</h3>
      <p className={styles.paragraph}>
        Join AnimalGram today and become a part of our growing community. Share your animal's story, explore posts from
        other users, and connect with fellow animal enthusiasts. Let's make AnimalGram the happiest place on the internet
        for all things animals!
      </p>
    </div>
  );
}
