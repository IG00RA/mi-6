const o={openmodTableBtn:document.querySelector("[data-modTable-open]"),closemodTableBtn:document.querySelector("[data-modTable-close]"),modTable:document.querySelector("[data-modTable]"),openmodRoomBtn:document.querySelector("[data-modRoom-open]"),closemodRoomBtn:document.querySelector("[data-modRoom-close]"),modRoom:document.querySelector("[data-modRoom]"),openmodDetRoomBtn:document.querySelector("[data-modDetRoom-open]"),closemodDetRoomBtn:document.querySelector("[data-modDetRoom-close]"),modDetRoom:document.querySelector("[data-modDetRoom]"),openmodDetTableBtn:document.querySelector("[data-modDetTable-open]"),closemodDetTableBtn:document.querySelector("[data-modDetTable-close]"),modDetTable:document.querySelector("[data-modDetTable]"),body:document.querySelector("body")};function e(){o.modTable.classList.toggle("is-hidden"),o.body.classList.toggle("no-scroll")}function t(){o.modRoom.classList.toggle("is-hidden"),o.body.classList.toggle("no-scroll")}function d(){o.modDetRoom.classList.toggle("is-hidden"),o.body.classList.toggle("no-scroll")}function l(){o.modDetTable.classList.toggle("is-hidden"),o.body.classList.toggle("no-scroll")}o.openmodTableBtn.addEventListener("click",e),o.closemodTableBtn.addEventListener("click",e),o.openmodRoomBtn.addEventListener("click",t),o.closemodRoomBtn.addEventListener("click",t),o.openmodDetRoomBtn.addEventListener("click",d),o.closemodDetRoomBtn.addEventListener("click",d),o.openmodDetTableBtn.addEventListener("click",l),o.closemodDetTableBtn.addEventListener("click",l);
//# sourceMappingURL=index.6e9d5497.js.map
