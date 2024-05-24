import { classes} from '~/utils/style';
import styles from './card.module.css';

export const Card = ({
  Name,
  text,
  href,
  SVG,
  className,
  lable,
  style,
  ...rest
}) => (




                           <div className= {classes(styles.parent , className )} >
                                <div className={styles.card}>
                                    <div className={styles.contentBox}>
                                        <h1 className={styles.cardTitle}>{Name}</h1>
                                        <p className={classes(styles.cardContent , styles.textP)}>
                                           {text}
                                        </p>
                                        <a href={href}><span  className={styles.seeMore}>{lable}</span></a>
                                    </div>
                                    <div className={styles.dateBox}>
                                        {SVG}
                                    </div>
                                </div>
                           </div>












  // <div
  //   className={classes(styles.divider, className)}
  //   style={cssProps(
  //     {
  //       lineWidth: lineWidth,
  //       lineHeight: lineHeight,
  //       notchWidth: notchWidth,
  //       notchHeight: notchHeight,
  //       collapseDelay: numToMs(collapseDelay),
  //     },
  //     style
  //   )}
  //   {...rest}
  // >
  //   <div className={styles.line} data-collapsed={collapsed} />
  //   <div
  //     className={styles.notch}
  //     data-collapsed={collapsed}
  //     style={cssProps({ collapseDelay: numToMs(collapseDelay + 160) })}
  //   />
  // </div>
);

// Divider.defaultProps = {
//   lineWidth: '100%',
//   lineHeight: '2px',
//   notchWidth: '90px',
//   notchHeight: '10px',
//   collapsed: false,
//   collapseDelay: 0,
// };
