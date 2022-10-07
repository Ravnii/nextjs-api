import Image from 'next/image'
import { type } from 'os'
import styles from '../styles/jumbotron.module.css'
import layout from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

type Props = {
  headline: string
  src: string
  alt: string
  width: number
  height: number
}

export default function Jumbotron(props: Props) {
  return (
    <div className={utilStyles.jumbo}>
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        width={props.width}
        height={props.height}
      />
        <h1 className={`${layout.title} ${styles.headline}`}>{props.headline}</h1>
    </div>
  )
}
