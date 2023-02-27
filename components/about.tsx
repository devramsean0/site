import Image from 'next/image';
import grid from '@/styles/grid.module.scss';

export function About() {
  return (
    <div className={grid.about}>
        <center>
            <Image src="/images/me.png" alt="Me" width={200} height={200} />
            <h2>Hi, 👋</h2>
            <p>
                I'm a Student, Entrepeneur and Software Engineer,
                <br />
                however I'm taking more of a dive into the world of Electrical Engineering at the moment and have been participating in Hackclub's winter wonderland
            </p>
        </center>
    </div>
  );
}