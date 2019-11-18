import React, { Component } from 'react'
import './style.css'
// import Collection from '../../components/Home/Collection';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action'
import * as questActions from '../../store/quest/action'
import { Collection, Menu } from '../../components'
import { Link } from 'react-router-dom'

class Home extends Component {
  componentWillMount() {
    if (localStorage.getItem('token')) {
      if (!this.props.user.email) {
        this.props.verify()
        if (this.props.user.token === null) {
          this.setState({
            authenticated: false,
          })
        } else {
          this.setState({
            authenticated: true,
          })
          this.props.getsAllQuests()
        }
      }
    } else {
      this.setState({
        authenticated: false,
      })
      console.log('tạch')
    }
  }

  componentDidMount() {
    // this.props.getAllMeetings();
    window.scrollTo(0, 0)
  }
  top() {
    window.scrollTo(0, 0)
  }
  render() {
    // const { info } = this.props.user;
    // const { quests } = this.props.quest;
    // console.log(quests);
    // try {
    //   if (this.state.authenticated === false) {
    //     const { from } = this.props.location.state || { from: { pathname: "/" } };
    //     return <Redirect to={from} />
    //   }
    // } catch (error) {
    //   if (this.state === null) {
    //     // window.location.reload();
    //     // const { from } = this.props.location.state || { from: { pathname: "/home" } };
    //     // return <Redirect to={from} />
    //   }
    // }
    return (
      <div className="home">
        <header>
          <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
              <div className="container-fluid p-0">
                <div className="row align-items-center no-gutters">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo-img">
                      <a href="index.html">
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link
                              className="active"
                              to="/home"
                              style={{ fontWeight: 'bold' }}>
                              Trang chủ
                            </Link>
                          </li>
                          <li>
                            <Link to="/quest/my" style={{ fontWeight: 'bold' }}>
                              Thử thách của tôi
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="log_chat_area d-flex align-items-center">
                      <a href="#test-form" className="login popup-with-form">
                        <div className="dropdown">
                          {/* <button  type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                           </button> */}
                          <img
                            style={{
                              width: '2em',
                              height: '2em',
                              borderRadius: '1em',
                            }}
                            src="/images/avatar.jpg"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">
                              Thông tin tài khoản
                            </a>
                            <a className="dropdown-item" href="#">
                              Thay đổi mật khẩu
                            </a>
                            <a className="dropdown-item" href="#">
                              Chỉnh sửa thông tin
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                              Đăng xuất
                            </a>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-end */}
        
        {/* slider_area_start */}
        <div className="slider_area ">
          <div className="single_slider d-flex align-items-center justify-content-center background-single_slider">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-md-6">
                  <div className="illastrator_png">
                    <img src="/images/home/edu_ilastration.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="slider_info">
                    <h3>
                      BAMBOO QUEST
                      <br />
                      ỨNG DỤNG HỌC TẬP{' '}
                    </h3>
                    <a href="#" className="boxed_btn">
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider_area_end */}
        {/* popular_courses_start */}
        <div className="popular_courses">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 category">
              <div className="col-xl-12">
                <div className="course_nav">
                  <nav>
                    <ul className="nav" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true">
                          Tất cả
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false">
                          Toán học
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false">
                          Vật lý
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="design-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="design"
                          aria-selected="false">
                          Hoá học
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="Web-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="design"
                          aria-selected="false">
                          Lịch sử
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="Web-tab1"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="design"
                          aria-selected="false">
                          Wordpress
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="Web-tab11"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="design"
                          aria-selected="false">
                          Anh văn
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="Adobe-XD-tab8"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="design"
                          aria-selected="false">
                          Xã hội
                        </a>
                      </li>
                      <li className="nav-item"></li>
                    </ul>
                  </nav>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="all_courses">
            <div className="container">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single_courses">
                        <div className="thumb">
                          <a href="#">
                            <img src="/images/icon/ig.jpeg" alt="" />
                          </a>
                        </div>
                        <div className="courses_info">
                          <span>Tên Quiz</span>
                          <h3>
                            <a href="#">
                              Description <br />
                            </a>
                          </h3>
                          <div className="star_prise d-flex justify-content-between">
                            <div className="star">
                              {/* <i className="flaticon-mark-as-favorite-star" /> */}
                              <span>Quan Pham</span>
                            </div>
                            <div className="prise">
                              <span className="active_prise">10/10/2010</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single_courses">
                        <div className="thumb">
                          <a href="#">
                            <img src="/images/icon/ig1.jpeg" alt="" />
                          </a>
                        </div>
                        <div className="courses_info">
                          <span>Tên Quiz</span>
                          <h3>
                            <a href="#">Description</a>
                          </h3>
                          <div className="star_prise d-flex justify-content-between">
                            <div className="star">
                              {/* <i className="flaticon-mark-as-favorite-star" /> */}
                              <span>Quan Pham</span>
                            </div>
                            <div className="prise">
                              <span className="active_prise">10/10/2010</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single_courses">
                        <div className="thumb">
                          <a href="#">
                            <img src="/images/icon/ig2.jpeg" alt="" />
                          </a>
                        </div>
                        <div className="courses_info">
                          <span>Tên Quiz</span>
                          <h3>
                            <a href="#">
                              Description <br />
                            </a>
                          </h3>
                          <div className="star_prise d-flex justify-content-between">
                            <div className="star">
                              {/* <i className="flaticon-mark-as-favorite-star" /> */}
                              <span>Quan Pham</span>
                            </div>
                            <div className="prise">
                              <span className="active_prise">10/10/2010</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single_courses">
                        <div className="thumb">
                          <a href="#">
                            <img src="/images/icon/ig3.jpeg" alt="" />
                          </a>
                        </div>
                        <div className="courses_info">
                          <span>Tên Quiz</span>
                          <h3>
                            <a href="#">
                              Description
                              <br />
                              from beginner
                            </a>
                          </h3>
                          <div className="star_prise d-flex justify-content-between">
                            <div className="star">
                              {/* <i className="flaticon-mark-as-favorite-star" /> */}
                              <span>Quan Pham</span>
                            </div>
                            <div className="prise">
                              <span className="active_prise">10/10/2010</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single_courses">
                        <div className="thumb">
                          <img src="/images/icon/ig4.jpeg" alt="" />
                        </div>
                        <div className="courses_info">
                          <span>Tên Quiz</span>
                          <h3>
                            <a href="#">
                              Description <br />
                              and make work flow
                            </a>
                          </h3>
                          <div className="star_prise d-flex justify-content-between">
                            <div className="star">
                              {/* <i className="flaticon-mark-as-favorite-star" /> */}
                              <span>Quan Pham</span>
                            </div>
                            <div className="prise">
                              <span className="active_prise">10/10/2010</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="single_courses">
                        <div className="thumb">
                          <a href="#">
                            <img src="/images/icon/ig.jpeg" alt="" />
                          </a>
                        </div>
                        <div className="courses_info">
                          <span>Tên Quiz</span>
                          <h3>
                            <a href="#">
                              Description
                              <br />
                              Support
                            </a>
                          </h3>
                          <div className="star_prise d-flex justify-content-between">
                            <div className="star">
                              {/* <i className="flaticon-mark-as-favorite-star" /> */}
                              <span>Quan Pham</span>
                            </div>
                            <div className="prise">
                              <span className="active_prise">10/10/2010</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* popular_courses_end*/}
        
        {/* our_courses_start */}
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = {
  verify: authAction.verify,
  getsAllQuests: questActions.getsAllQuests,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
