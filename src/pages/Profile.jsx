import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
} from "mdb-react-ui-kit";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/Layout";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("Neeraj Yadav");
  const [email, setEmail] = useState("neeraj@example.com");
  const [phone, setPhone] = useState("(097) 234-5678");
  const [mobile, setMobile] = useState("(098) 765-4321");
  const [address, setAddress] = useState("Bay Area, San Francisco, CA");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };
  return (
    <Layout>
      <section
        className="pt-[140px] md:pt-[130px]"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle mx-auto"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mt-2">Neeraj Yadav</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn onClick={handleEditProfile}>Edit Profile</MDBBtn>
                    <MDBBtn outline className="ms-1">
                      Shop Now
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      {/* <MDBIcon fas icon="globe fa-lg text-warning" /> */}
                      <FaCartPlus />

                      <MDBCardText>Your Cart</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      {/* <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} /> */}
                      <FaHeart />

                      <MDBCardText>Wishlist</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <TbCategory />

                      <MDBCardText>All Categories</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MdModeEdit />

                      <MDBCardText>Edit Account</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MdDelete />

                      <MDBCardText>Delete Account</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <form onSubmit={handleFormSubmit}>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBBtn type="submit">Submit</MDBBtn>
                  </form>
                </MDBCardBody>
              </MDBCard>

              <MDBRow >
                <MDBCol md="6" className="m-1 w-full">
                  <MDBCard
                    className="mb-4 mb-md-0"
                    style={{ padding: "20px", backgroundColor: "#f8f9fa" }}
                  >
                    <MDBCardBody>
                      <MDBCardText
                        className="mb-4"
                        style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                      >
                        <span className="text-primary font-italic me-1">
                          Account Information
                        </span>
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        Name: John Doe
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        Email: john.doe@example.com
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        Phone: (123) 456-7890
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6" className="m-1 w-full">
                  <MDBCard
                    className="mb-4 mb-md-0"
                    style={{ padding: "20px", backgroundColor: "#f8f9fa" }}
                  >
                    <MDBCardBody>
                      <MDBCardText
                        className="mb-4"
                        style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                      >
                        <span className="text-primary font-italic me-1">
                          Order History
                        </span>
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        Order #1234: Delivered
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        Order #1235: In Transit
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        Order #1236: Processing
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6" className="m-1 w-full">
                  <MDBCard
                    className="mb-4 mb-md-0"
                    style={{ padding: "20px", backgroundColor: "#f8f9fa" }}
                  >
                    <MDBCardBody>
                      <MDBCardText
                        className="mb-4"
                        style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                      >
                        <span className="text-primary font-italic me-1">
                          Payment Methods
                        </span>
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        Visa **** **** **** 1234
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".9rem" }}
                      >
                        MasterCard **** **** **** 5678
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

              </MDBRow>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </Layout>
  );
}
