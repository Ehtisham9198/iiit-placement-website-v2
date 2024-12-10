import div from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

export default function PlacementTeam() {
  return (
    <div>
      <div className="col-lg-12">
        <h1 className="fw-bolder">About US </h1>

        <div className="row">
          <div className="col-lg-12">
            <p>
              The Training and Placement Cell, IIIT Bhubaneswar aims at creating
              a link between the students and the corporate sectors. It works to
              train the students with effective problem solving ability,
              personality improvement as well as good communication skills. We
              are a team comprising of placement executives, students and
              faculties.We facilitate full-time and internship recruitment for
              300+ graduates from across 5 different departments ( Computer
              Science & Engineering, Information Technology, Electrical and
              Electronics Engineering, Electronics and Telecommunication
              Engineering ) with a vast diversity of talent. We have students
              across many programs namely B.Tech, M.Tech, and Ph.D who are
              looking forward to challenging and exciting job opportunities in
              industry and academia.
            </p>
            <h2 className="text-success text-lg">Placement Officers</h2>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12 col-sm-2">
              <Image
                src="/tpcell/team/subrata.jpeg"
                height={290}
                width={250}
                objectFit="cover"
              />
            </div>
            <div className="col-8">
              <p>
                <strong>Dr. Subrata Kumar Mohanty</strong>
                <p>
                  Professor Incharge Training and Placement cell
                  <div>Phone:+91 9439365722,+91 8895432243</div>
                  <Link href={"mailto:Subrata@iiit-bh.ac.in"}>
                    Email – subrata@iiit-bh.ac.in
                  </Link>
                </p>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-2">
              <Image
                src="/tpcell/team/navanita.jpeg"
                height={290}
                width={250}
                objectFit="cover"
              />
            </div>
            <div className="col-8">
            <p>
                <strong>Ms. Navanita Nayak</strong>
                <p>
                  Assistant Training and Placement Officer
                  <div>Phone: +91 8093030324, +91 9437122111</div>
                  <Link href="mailto:navanita@iiit-bh.ac.in">
                    Email – navanita@iiit-bh.ac.in
                  </Link>
                </p>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-2">
              <Image
                src="/tpcell/team/rajashree.jpg"
                height={290}
                width={250}
                objectFit="cover"
              />
            </div>
            <div className="col-8">
            <p>
                <strong>Ms. Rajashree Mohanty</strong>
                <p>
                  Assistant Training and Placement Officer
                  <div>Phone: +91 8093030326, +91 7992991136</div>
                  <Link href="mailto:rajashree@iiit-bh.ac.in">
                    Email – rajashree@iiit-bh.ac.in
                  </Link>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <h2 className="text-success pt-5 pb-2 text-lg" id="dept">
          Placement Coordinators
        </h2>
        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/swoyam.jpg"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-8">
            <p>
              <strong>Swoyam Siddharth Nayak</strong>
              <p>
                Computer Science Engineering, Batch of 2025
                <div>Phone: +91 7608086659</div>
                <Link href="mailto:b121065@iiit-bh.ac.in">
                  Email – b121065@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>


        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/Rajnish.png"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Rajnish Kumar Singh</strong>
              <p>
                Computer Science Engineering, Batch of 2025
                <div>Phone: +91 8210788702</div>
                <Link href="mailto:b421037@iiit-bh.ac.in">
                  Email – b421037@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>


        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/Pradosh.jpg"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Pradosh Preetam</strong>
              <p>
              Electrical and Electronics Engineering, Batch of 2026
                <div>Phone: +91 7008915847</div>
                <Link href="mailto:b322034@iiit-bh.ac.in">
                  Email – b322034@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
       </div>
      
   
      
        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/sipra.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Sipra Mohanty</strong>
              <p>
              Computer Science Engineering, Batch of 2026
                <div>Phone: +91 8338916918</div>
                <Link href="mailto:b122112@iiit-bh.ac.in">
                  Email – b122112@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>
         
    
        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/Haris.jpg"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Muhammad Haris</strong>
              <p>
              Computer Engineeringg, Batch of 2026
                <div>Phone: +91 9560714195</div>
                <Link href="mailto:B522036@iiit-bh.ac.in">
                  Email – b522036@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/Ehtisham.jpg"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Mohd Ehtisham </strong>
              <p>
              Computer Engineering, Batch of 2026
                <div>Phone: +91 9198851103</div>
                <Link href="mailto:B522035@iiit-bh.ac.in">
                  Email – b522035@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>
        

        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/Aashray.jpeg"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Aashray Gupta</strong>
              <p>
              Computer Engineering, Batch of 2025
                <div>Phone: +91 9592996389</div>
                <Link href="mailto:b521001@iiit-bh.ac.in">
                  Email – b521001@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>

      
        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/bandana.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>B K Bandana</strong>
              <p>
              Computer Science Engineering, Batch of 2026
                <div>Phone: +91 9777949237</div>
                <Link href="mailto:b122032@iiit-bh.ac.in">
                  Email – b122032@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>


        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/chirantan.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Chirantan Beura</strong>
              <p>
              Information Technology, Batch of 2026
                <div>Phone: +91 8018825114</div>
                <Link href="mailto:b422022@iiit-bh.ac.in">
                  Email – b422022@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>


        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/arushi.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Arushi Mahapatra </strong>
              <p>
              Electrical and Electronics Engineering, Batch of 2026
                <div>Phone: +91 7815006714</div>
                <Link href="mailto:b322012@iiit-bh.ac.in">
                  Email – b322012@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>


        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/bedasnata.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Bedasnata Das </strong>
              <p>
              Computer Science Engineering, Batch of 2026
                <div>Phone: +91 9437547479</div>
                <Link href="mailto:b122034@iiit-bh.ac.in">
                  Email – b122034@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>


      
        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/ekansh.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Ekansh Mittal</strong>
              <p>
              Information Technology, Batch of 2026
                <div>Phone: +91 9417328942</div>
                <Link href="mailto:b422026@iiit-bh.ac.in">
                  Email – b422026@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>

    
  
        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/astha.jpg"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Astha Sharma</strong>
              <p>
              Computer Science Engineering, Batch of 2026
                <div>Phone: +91 7606984353</div>
                <Link href="mailto:b122028@iiit-bh.ac.in">
                  Email – b122028@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>



        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
              src="/tpcell/team/ankita.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Ankita Jena</strong>
              <p>
              Computer Science Engineering, Batch of 2026
                <div>Phone: +91 9831883153</div>
                <Link href="mailto:b122021@iiit-bh.ac.in">
                  Email – b122021@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
               src="/tpcell/team/tejasweePc.webp"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>Tejaswee Kumar Singh</strong>
              <p>
              Computer Science Engineering, Batch of 2026
                <div>Phone: +91 7205147088</div>
                <Link href="mailto:b122021@iiit-bh.ac.in">
                  Email – b1220125@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>

        
        <div className="row">
          <div className="col-12 col-sm-2">
            <Image
               src="/tpcell/team/pinaki.jpg"
              height={290}
              width={250}
              objectFit="cover"
            />
          </div>
          <div className="col-10">
            <p>
              <strong>K.S. Pinaki Sahu</strong>
              <p>
              Computer Engineering, Batch of 2026
                <div>Phone: +91 8221831052</div>
                <Link href="mailto:b122021@iiit-bh.ac.in">
                  Email – b522021@iiit-bh.ac.in
                </Link>
              </p>
            </p>
          </div>
        </div>
  
    
      </div>
    </div>
  );
}
