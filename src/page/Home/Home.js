import React, { Component } from 'react'
import './style.css'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action'
import * as questActions from '../../store/quest/action'
import { Collection, Menu, Item } from '../../components'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 1,
    }
  }
  changeCategory = id => {
    this.setState({
      category: id,
    })
  }
  UNSAFE_componentWillMount() {
    this.props.getsAllQuests(25)
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
    const { quests } = this.props.quest
    console.log(quests)
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
                      <Link to="index.html">
                        <img src="img/logo.png" alt="" />
                      </Link>
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
                            <Link
                              to="/"
                              style={{ fontWeight: 'bold' }}>
                              Chơi ngay
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/user/quest"
                              style={{ fontWeight: 'bold' }}>
                              Thử thách của tôi
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="log_chat_area d-flex align-items-center">
                      <Link to="#test-form" className="login popup-with-form">
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
                            src="/images/avatar-default.png"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/user/info">
                              Thông tin tài khoản
                            </Link>
                            {/* <Link className="dropdown-item" to="#">
                              Thay đổi mật khẩu
                            </Link> */}
                            <Link className="dropdown-item" to="/user/edit">
                              Chỉnh sửa thông tin
                            </Link>
                            <div className="dropdown-divider"/>
                            <Link className="dropdown-item" to="#" onClick={() => this.props.logout()}>
                              Đăng xuất
                            </Link>
                          </div>
                        </div>
                      </Link>
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
                    <h3>BAMBOO QUEST</h3>
                    <h3 style={{ fontSize: '-webkit-xxx-large' }}>
                      ỨNG DỤNG HỌC TẬP
                    </h3>
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
                    {/* <nav>
                      <ul className="nav" id="myTab" role="tablist">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            to="#"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                            onClick={() => this.changeCategory(0)}>
                            Tất cả
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            id="Web-tab11a"
                            data-toggle="tab"
                            to="#"
                            role="tab"
                            aria-controls="design"
                            aria-selected="false"
                            onClick={() => this.changeCategory(1)}>
                            HOT
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            className="nav-link category-hover"
                            id="Web-tab11"
                            data-toggle="tab"
                            to="#"
                            role="tab"
                            aria-controls="design"
                            aria-selected="false">
                            Thể loại
                          </Link>
                          <div className="content-category">
                            <button className="item-category">
                              <p
                                onClick={() => this.changeCategory(2)}
                                style={{ color: '#000' }}>
                                Toán học
                              </p>
                            </button>
                            <br />
                            <button className="item-category">
                              <p
                                onClick={() => this.changeCategory(3)}
                                style={{ color: '#000' }}>
                                Vật lý
                              </p>
                            </button>
                            <br />
                            <button className="item-category">
                              <p
                                onClick={() => this.changeCategory(4)}
                                style={{ color: '#000' }}>
                                Hoá học
                              </p>
                            </button>
                            <br />
                            <button className="item-category">
                              <p
                                onClick={() => this.changeCategory(5)}
                                style={{ color: '#000' }}>
                                Văn học
                              </p>
                            </button>
                            <br />
                            <button className="item-category">
                              <p
                                onClick={() => this.changeCategory(6)}
                                style={{ color: '#000' }}>
                                Lịch sử
                              </p>
                            </button>
                          </div>
                        </li>

                        <li className="nav-item"></li>
                      </ul>
                    </nav> */}
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
                    {/* List quest */}
                    {quests.map(quest => (
                      <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        key={quest._id}>
                        <Item
                          id={quest._id}
                          title={quest.title}
                          description={quest.description}
                          link={`/quest/info/${quest._id}`}
                          img_path={quest.img_path}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  logout: authAction.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
