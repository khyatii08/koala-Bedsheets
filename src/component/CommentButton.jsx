
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function CommentButton() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[999]">

            {open && (
                <div className="mb-4 w-80 rounded-2xl bg-white p-5 shadow-2xl">

                    <div className="mb-3 flex items-center justify-between">
                        <h3 className="font-semibold text-gray-800">
                            How can we help?
                        </h3>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-xl text-gray-500 hover:text-black"
                        >

                        </button>
                    </div>

                    <textarea
                        placeholder="Type your message..."
                        className="w-full rounded-xl border border-gray-300 p-3 text-sm outline-none focus:border-[#626652]"
                        rows={3}
                    />

                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Open chat"
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#626652] shadow-lg transition duration-300 hover:scale-105"
                    >
                        <FontAwesomeIcon
                            icon={faCommentDots}
                            size="lg"
                        />
                    </button>
                </div>
            )}

            <button
                onClick={() => setOpen(!open)}
                aria-label="Open chat"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#626652] shadow-lg transition duration-300 hover:scale-105"
            >
                <MessageCircle size={25} strokeWidth={1.7} />
            </button>

        </div>
    );
}

export default CommentButton;
