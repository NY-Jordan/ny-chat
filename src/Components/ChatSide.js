import ConversationMenu from "./ConversationMenu";

function ChatSide() {
  return (
    <div className="chat-sidebar">
        <div className="contacts-list scrollbar-overlay">
            <div className="nav nav-tabs border-0 flex-column" role="tablist" aria-orientation="vertical">
                <ConversationMenu status={"active"} />
                <ConversationMenu />
                <ConversationMenu />
                <ConversationMenu />
            </div>
        </div>
        <form className="contacts-search-wrapper">
            <div className="form-group mb-0 position-relative d-md-none d-lg-block w-100 h-100"><input className="form-control form-control-sm chat-contacts-search border-0 h-100" type="text" placeholder="Search contacts ..." /><span className="fas fa-search contacts-search-icon"></span></div><button className="btn btn-sm btn-transparent d-none d-md-inline-block d-lg-none"><span className="fas fa-search fs--1"></span></button>
        </form>
    </div>
  );
}

export default ChatSide;
