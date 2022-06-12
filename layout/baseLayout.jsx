import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import BaseNavbar from "../components/navbar";
import BaseFooter from "../components/footer";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import { getBreadCrumbs } from "../utils/utils";
export default function BaseLayout(props) {
  const router = useRouter();
  const breadCrumb = getBreadCrumbs(router.route);
  return (
    <div className={styles.layout}>
      <Head>
        <title>IIIT Bhubaneswar Placements</title>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Placement website for IIIT Bhubaneswar"
        />
        <noscript>Please enable JavaScript to view the content.</noscript>
      </Head>
      <BaseNavbar />
      <div className={styles.imageWrapper}>
        <div className={`d-flex ${styles.bgOrange}`}>
          <div className="  align-items-center justify-content-center d-none d-lg-flex  col-lg-6">
            <div className="p-lg-4 p-2  text-capitalize rounded-full bg-dark shadow-lg rounded-pill text-light   ">
              {" "}
              <h2 className="fw-bold text-center"> <strong className="text-success">IIIT-Bh</strong>ubaneswar Placements</h2>
              <div className="ms-5 d-flex gap-2">
                {breadCrumb.map((item, index) => {
                  return (
                    <div
                      className={styles.breadcrumbItem}
                      key={`${item.route} ${index}`}
                    >
                      {` |  `}
                      <Link
                        key={index}
                        href={item.route}
                        className={` text-capitalize`}
                        style={{
                          underline: "none",
                        }}
                      >
                        {item.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" col-lg-6  col-12">
            <Image
              src="/infra/10.jpg"
              width={1920}
              height={800}
              layout="responsive"
              priority={true}
              objectFit="cover"
              alt="IIIT Bhubaneswar Placements"
              blurDataURL="/infra/10.jpg"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <Container className={styles.main}>{props.children}</Container>
      <BaseFooter />
    </div>
  );
}
