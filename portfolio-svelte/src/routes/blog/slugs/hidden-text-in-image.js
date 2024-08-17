export const content = [{
    title: "Hiding Texts in Image",
    description: "This is my attempt at hiding a text inside an image file. <img src='https://raw.githubusercontent.com/ohdy518/PNGtoText/master/test/thisat1024.png' alt='An image a message is hidden in. '/> <br /> Can you see it?",
    content: "" +
        "<a href='https://github.com/ohdy518/PNGtoText' class='hover:underline text-sky-400'>-> GitHub here. </a><br /> <br />" +
        "Steganography is a practice of hiding messages inside cover data. I, out of curiosity, made a tool to hide and reveal " +
        "a hidden message out of an image file, based upon a set of custom-made rules. <br /> <br /> " +
        "&mdash;&mdash;&mdash;<br />" +
        "The rule consists of two elements; the <span class='jbm text-base'>locator</span> and the <span class='jbm text-base'>message</span>. " +
        "The locator, positioned in the pixel <span class='jbm text-base'>(0, 0)</span> and <span class='jbm text-base'>(1, 0)</span>, " +
        "tells the program where the message is located. Pixel <span class='jbm text-base'>(0, 0)</span> signifies where " +
        "the message starts (initiates), and pixel <span class='jbm text-base'>(1, 0)</span> " +
        "signifies where the message ends (terminates). <br /> <br />Each locator holds an X and Y value of the initiating/terminating point. " +
        "Since a pixel is 24 bits, either X or Y value can hold up to 12 bits. Therefore, the message can be located anywhere between " +
        "pixel <span class='jbm text-base'>0</span> to pixel <span class='jbm text-base'>4095</span>, both in width and height. <br /> <br />" +
        "&mdash;&mdash;&mdash;<br />" +
        "The message is simply encoded into binary bits, divided by the length of 8, then written as an RGB value. After " +
        "undergoing numerous <s>three</s> meticulously-crafted tests, it seems to be capable of embedding ASCII characters. <br /> <br />" +
        "In most cases, the encoded binary bits is indivisible by the length of 24, which is neccessary to represent as a full colored pixel. " +
        "For this event, any R, G, or B value that is 0 is ignored. <i>I have no idea if this approach will become a problem, but " +
        "nothing happened while doing <s>three</s> tests, so...</i>",
}]