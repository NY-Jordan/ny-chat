function ConversationMenu({status = null}) {
    return (
        <div className={"hover-actions-trigger chat-contact nav-item " + status} role="tab" id="chat-link-0" data-bs-toggle="tab" data-bs-target="#chat-0" aria-controls="chat-0" aria-selected="true">
            <div className="d-md-none d-lg-block">
                <div className="dropdown dropdown-active-trigger dropdown-chat">
                    <button className="hover-actions btn btn-link btn-sm text-400 dropdown-caret-none dropdown-toggle end-0 fs-0 mt-4 me-1 z-index-1 pb-2 mb-n2" type="button" data-boundary="viewport" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="fas fa-cog" data-fa-transform="shrink-3 down-4"></span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end border py-2 rounded-2">
                        <a className="dropdown-item" href="#!">Mute</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#!">Archive</a>
                        <a className="dropdown-item text-danger" href="#!">Delete</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#!">Mark as Unread</a>
                        <a className="dropdown-item" href="#!">Something's Wrong</a>
                        <a className="dropdown-item" href="#!">Ignore Messsages</a>
                        <a className="dropdown-item" href="#!">Block Messages</a>
                    </div>
                </div>
            </div>
            <div className="d-flex p-3">
                <div className="avatar avatar-xl status-online">
                    <img className="rounded-circle" src={"./../assets/assets/img/team/2.jpg"} alt="" />
                </div>
                <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-0 chat-contact-title">Antony Hopkins</h6><span className="message-time fs--2">Tue</span>
                    </div>
                    <div className="min-w-0">
                        <div className="chat-contact-content pe-3">Antony sent 6 photos</div>
                        <div className="position-absolute bottom-0 end-0 hover-hide"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ConversationMenu;
  


