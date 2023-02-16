
function ChatContainItem({status = null}) {
    return (
      <>
          <div className={"tab-pane card-chat-pane " + status} id="chat-0" role="tabpanel" aria-labelledby="chat-link-0">
                  <div className="chat-content-header">
                    <div className="row flex-between-center">
                      <div className="col-6 col-sm-8 d-flex align-items-center"><a className="pe-3 text-700 d-md-none contacts-list-show" href="#!">
                          <div className="fas fa-chevron-left"></div>
                        </a>
                        <div className="min-w-0">
                          <h5 className="mb-0 text-truncate fs-0">Antony Hopkins</h5>
                          <div className="fs--2 text-400">Active On Chat</div>
                        </div>
                      </div>
                      <div className="col-auto"><button className="btn btn-sm btn-falcon-primary me-2" type="button" data-index="0" data-bs-toggle="tooltip" data-bs-placement="top" title="Start a Call"><span className="fas fa-phone"></span></button><button className="btn btn-sm btn-falcon-primary me-2" type="button" data-index="0" data-bs-toggle="tooltip" data-bs-placement="top" title="Start a Video Call"><span className="fas fa-video"></span></button><button className="btn btn-sm btn-falcon-primary btn-info" type="button" data-index="0" data-bs-toggle="tooltip" data-bs-placement="top" title="Conversation Information"><span className="fas fa-info"></span></button></div>
                    </div>
                  </div>
                  <div className="chat-content-body" style={{ display : "inherit" }}>
                    <div className="conversation-info" data-index="0">
                      <div className="h-100 overflow-auto scrollbar">
                        <div className="d-flex position-relative align-items-center p-3 border-bottom">
                          <div className="avatar avatar-xl status-online">
                            <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                          </div>
                          <div className="flex-1 ms-2 d-flex flex-between-center">
                            <h6 className="mb-0"><a className="text-decoration-none stretched-link text-700" href="pages/user/profile.html">Antony Hopkins</a></h6>
                            <div className="dropdown z-index-1"><button className="btn btn-link btn-sm text-400 dropdown-toggle dropdown-caret-none me-n3" type="button" id="profile-dropdown-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-cog"></span></button>
                              <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="profile-dropdown-0"><a className="dropdown-item" href="#!">Mute</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-3 pt-2">
                          <div className="nav flex-column font-sans-serif fw-medium"><a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span className="conversation-info-icon"><span className="fas fa-search me-1" data-fa-transform="shrink-1 down-3"></span></span>Search in Conversation</a><a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span className="conversation-info-icon"><span className="fas fa-pencil-alt me-1" data-fa-transform="shrink-1"></span></span>Edit Nicknames</a><a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span className="conversation-info-icon"><span className="fas fa-palette me-1" data-fa-transform="shrink-1"></span></span><span>Change Color</span></a><a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span className="conversation-info-icon"><span className="fas fa-thumbs-up me-1" data-fa-transform="shrink-1"></span></span>Change Emoji</a><a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span className="conversation-info-icon"><span className="fas fa-bell me-1" data-fa-transform="shrink-1"></span></span>Notifications</a></div>
                        </div>
                        <hr className="my-2" />
                        <div className="px-3" id="others-info-0">
                          <div className="title" id="shared-media-title-0"><a className="btn btn-link btn-accordion hover-text-decoration-none dropdown-indicator" href="#shared-media-0" data-bs-toggle="collapse" aria-expanded="false" aria-controls="shared-media-0">Shared media</a></div>
                          <div className="collapse" id="shared-media-0" aria-labelledby="shared-media-title-0" data-parent="#others-info-0">
                            <div className="row mx-n1">
                              <div className="col-6 col-md-4 px-1"><a href="assets/img/chat/1.jpg" data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src="assets/img/chat/1.jpg" alt="" /></a></div>
                              <div className="col-6 col-md-4 px-1"><a href="assets/img/chat/2.jpg" data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src="assets/img/chat/2.jpg" alt="" /></a></div>
                              <div className="col-6 col-md-4 px-1"> <a href="assets/img/chat/3.jpg" data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src="assets/img/chat/3.jpg" alt="" /></a></div>
                              <div className="col-6 col-md-4 px-1"> <a href="assets/img/chat/4.jpg" data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src="assets/img/chat/4.jpg" alt="" /></a></div>
                              <div className="col-6 col-md-4 px-1"> <a href="assets/img/chat/5.jpg" data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src="assets/img/chat/5.jpg" alt="" /></a></div>
                              <div className="col-6 col-md-4 px-1"> <a href="assets/img/chat/6.jpg" data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src="assets/img/chat/6.jpg" alt="" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-content-scroll-area scrollbar">
                      <div className="d-flex position-relative p-3 border-bottom mb-3 align-items-center">
                        <div className="avatar avatar-2xl status-online me-3">
                          <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0"><a className="text-decoration-none stretched-link text-700" href="pages/user/profile.html">Antony Hopkins</a></h6>
                          <p className="mb-0">You friends with Antony Hopkins. Say hi to start the conversation</p>
                        </div>
                      </div>
                      <div className="text-center fs--2 text-500"><span>May 5, 2019, 11:54 am</span></div>
                      <div className="d-flex p-3">
                        <div className="avatar avatar-l me-2">
                          <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="w-xxl-75">
                            <div className="hover-actions-trigger d-flex align-items-center">
                              <div className="chat-message bg-200 p-2 rounded-2">Yes, in an organization stature, this is a must. Besides, we need to quickly establish all other professional appearances, e.g., having a website where members’ profile will be displayed along with additional organizational information. Providing services to existing members is more important than attracting new members at this moment, in my opinion..</div>
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                            </div>
                            <div className="text-400 fs--2"><span>11:54 am</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex p-3">
                        <div className="avatar avatar-l me-2">
                          <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="w-xxl-75">
                            <div className="hover-actions-trigger d-flex align-items-center">
                              <div className="chat-message bg-200 p-2 rounded-2">What are you doing?</div>
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                            </div>
                            <div className="text-400 fs--2"><span>11:54 am</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex p-3">
                        <div className="flex-1 d-flex justify-content-end">
                          <div className="w-100 w-xxl-75">
                            <div className="hover-actions-trigger d-flex flex-end-center">
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                              <div className="bg-primary text-white p-2 rounded-2 chat-message light">
                                <p className="mb-0">I took this pic </p>
                                <a href="assets/img/chat/1.jpg" data-gallery="gallery-3">
                                  <img className="rounded" src="assets/img/chat/1.jpg" alt="" width="150" />
                                </a>
                              </div>
                            </div>
                            <div className="text-400 fs--2 text-end">11:54 am<span className="fas fa-check ms-2 text-success"></span></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex p-3">
                        <div className="flex-1 d-flex justify-content-end">
                          <div className="w-100 w-xxl-75">
                            <div className="hover-actions-trigger d-flex flex-end-center">
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                              <div className="bg-primary text-white p-2 rounded-2 chat-message light">Nothing!</div>
                            </div>
                            <div className="text-400 fs--2 text-end">11:54 am<span className="fas fa-check ms-2 text-success"></span></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center fs--2 text-500"><span>May 6, 2019, 11:54 am</span></div>
                      <div className="d-flex p-3">
                        <div className="avatar avatar-l me-2">
                          <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="w-xxl-75">
                            <div className="hover-actions-trigger d-flex align-items-center">
                              <div className="chat-message bg-200 p-2 rounded-2">How are you?</div>
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                            </div>
                            <div className="text-400 fs--2"><span>11:54 am</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex p-3">
                        <div className="flex-1 d-flex justify-content-end">
                          <div className="w-100 w-xxl-75">
                            <div className="hover-actions-trigger d-flex flex-end-center">
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                              <div className="bg-primary text-white p-2 rounded-2 chat-message light">Fine</div>
                            </div>
                            <div className="text-400 fs--2 text-end">11:54 am<span className="fas fa-check-double ms-2"></span></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center fs--2 text-500"><span>May 7, 2019, 11:54 am</span></div>
                      <div className="d-flex p-3">
                        <div className="flex-1 d-flex justify-content-end">
                          <div className="w-100 w-xxl-75">
                            <div className="hover-actions-trigger d-flex flex-end-center">
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                              <div className="chat-message chat-gallery">
                                <div className="row mx-n1">
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/7.jpg" data-gallery="gallery-1"><img src="assets/img/chat/7.jpg" alt="" className="img-fluid rounded mb-2" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/8.jpg" data-gallery="gallery-1"><img src="assets/img/chat/8.jpg" alt="" className="img-fluid rounded mb-2" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/9.jpg" data-gallery="gallery-1"><img src="assets/img/chat/9.jpg" alt="" className="img-fluid rounded mb-2" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/10.jpg" data-gallery="gallery-1"><img src="assets/img/chat/10.jpg" alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/11.jpg" data-gallery="gallery-1"><img src="assets/img/chat/11.jpg" alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/12.jpg" data-gallery="gallery-1"><img src="assets/img/chat/12.jpg" alt="" className="img-fluid rounded" /></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-400 fs--2 text-end">11:54 am<span className="fas fa-check ms-2"></span></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex p-3">
                        <div className="avatar avatar-l me-2">
                          <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="w-xxl-75">
                            <div className="hover-actions-trigger d-flex align-items-center">
                              <div className="chat-message bg-200 p-2 rounded-2">I took some excellent images yesterday.</div>
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                            </div>
                            <div className="text-400 fs--2"><span>11:54 am</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center fs--2 text-500"><span>May 8, 2019, 11:54 am</span></div>
                      <div className="d-flex p-3">
                        <div className="flex-1 d-flex justify-content-end">
                          <div className="w-100 w-xxl-75">
                            <div className="hover-actions-trigger d-flex flex-end-center">
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                              <div className="bg-primary text-white p-2 rounded-2 chat-message light">Give me the images.</div>
                            </div>
                            <div className="text-400 fs--2 text-end">11:54 am</div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex p-3">
                        <div className="avatar avatar-l me-2">
                          <img className="rounded-circle" src="assets/img/team/2.jpg" alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="w-xxl-75">
                            <div className="hover-actions-trigger d-flex align-items-center">
                              <div className="chat-message chat-gallery">
                                <div className="row mx-n1">
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/1.jpg" data-gallery="gallery-2"><img src="assets/img/chat/1.jpg" alt="" className="img-fluid rounded mb-2" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/2.jpg" data-gallery="gallery-2"><img src="assets/img/chat/2.jpg" alt="" className="img-fluid rounded mb-2" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/3.jpg" data-gallery="gallery-2"><img src="assets/img/chat/3.jpg" alt="" className="img-fluid rounded mb-2" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/4.jpg" data-gallery="gallery-2"><img src="assets/img/chat/4.jpg" alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/5.jpg" data-gallery="gallery-2"><img src="assets/img/chat/5.jpg" alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                  </div>
                                  <div className="col-6 col-md-4 px-1" style={{ minWidth : "50px" }}>
                                    <a href="assets/img/chat/6.jpg" data-gallery="gallery-2"><img src="assets/img/chat/6.jpg" alt="" className="img-fluid rounded"  /></a>
                                  </div>
                                </div>
                              </div>
                              <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Forward"><span className="fas fa-share"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><span className="fas fa-archive"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></a></li>
                                <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove"><span className="fas fa-trash-alt"></span></a></li>
                              </ul>
                            </div>
                            <div className="text-400 fs--2"><span>11:54 am</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
      </>
    );
  }
  
  export default ChatContainItem;