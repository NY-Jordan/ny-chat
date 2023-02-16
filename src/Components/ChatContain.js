import ChatContainItem from "./ChatContainItem";


function ChatContain() {
  return (
    <>
        <div className="tab-content card-chat-content">
            <ChatContainItem status={"active"} />
            <ChatContainItem />
            <ChatContainItem />
            <ChatContainItem />
            <form className="chat-editor-area">
                <div className="emojiarea-editor outline-none scrollbar" contentEditable="true"></div><input className="d-none" type="file" id="chat-file-upload" /><label className="chat-file-upload cursor-pointer" htmlFor="chat-file-upload"><span className="fas fa-paperclip"></span></label>
                <div className="btn btn-link emoji-icon" data-emoji-button="data-emoji-button"><span className="far fa-laugh-beam"></span></div><button className="btn btn-sm btn-send shadow-none" type="submit">Send</button>
            </form>
        </div>
    </>
  );
}

export default ChatContain;