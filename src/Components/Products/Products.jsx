import styles from './Products.module.scss';

const Products = ({ sviters, dozdeviks }) => {
  return (
    <>
      <ul>
        <p className={styles.productsText}>
          Мы очень тщательно разрабатываем модели наших изделий, в первую
          очередь, учитывая такие критерии: <br />
          комфорт в процессе носки; изделие должно согревать, но при этом
          "дышать", мы будем - использовать натуральные волокна; удобство
          одевания. И, конечно же, ваш любимец должен выглядеть стильно и
          красиво.
        </p>
        <h2 className={styles.productsTitle}>СВИТЕРА</h2>
        <div className={styles.productsblock}>
          {sviters.map(sviter => (
            <li className={styles.productsList} key={sviter.id}>
              <div>
                <h3 className={styles.productsParagraf}>"{sviter.alt}"</h3>
                <div>
                  <img
                    className={styles.productsImg}
                    src={sviter.url}
                    alt={sviter.alt}
                    width="400px"
                  />
                </div>
              </div>
            </li>
          ))}
        </div>
        <h2 className={styles.productsTitle}>ДОЖДЕВИКИ</h2>
        <div className={styles.productsblock}>
          {dozdeviks.map(dozdevik => (
            <li className={styles.productsList} key={dozdevik.id}>
              <div>
                <h3 className={styles.productsParagraf}>"{dozdevik.alt}"</h3>
                <div>
                  <img
                    className={styles.productsImg}
                    src={dozdevik.url}
                    alt={dozdevik.alt}
                    width="400px"
                  />
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default Products;
