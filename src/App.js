import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {
            
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return (
        <div className="App">
            <div id="progressBarContainer">
                <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus est, pellentesque non libero quis, rutrum sagittis nisl. Maecenas convallis metus ex. Etiam feugiat est odio, vehicula fringilla justo faucibus vel. In hac habitasse platea dictumst. Fusce ac lectus nec nulla ornare convallis sed fermentum mi. Ut tellus nunc, lobortis vitae lectus sit amet, cursus luctus odio. Etiam in arcu quis lacus molestie dictum. Aenean convallis est diam, at elementum felis facilisis a. Morbi sit amet egestas est. Donec gravida odio eget tristique bibendum. Vivamus aliquet sed tortor sollicitudin scelerisque. Aliquam non mauris lacinia, molestie tortor ut, sagittis lectus. Aliquam vel mauris id odio efficitur tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                <p>Duis at nisl consectetur ipsum fermentum scelerisque non sit amet enim. Fusce ac accumsan felis. Etiam sit amet eros sed tortor tempor lacinia. In tristique ex ac odio sagittis, et feugiat leo eleifend. Nunc interdum purus in leo lobortis, id pharetra metus maximus. Fusce pharetra venenatis massa, at ullamcorper ligula accumsan eu. Duis at finibus leo. Aliquam eget est neque. Nulla eget mi consectetur, malesuada justo a, laoreet erat. Morbi ut nibh id libero interdum consectetur. Cras consectetur nisl vel erat vulputate, vel suscipit velit tempus. Curabitur odio turpis, mattis vitae pharetra nec, gravida a dolor. Duis iaculis turpis tellus, a scelerisque elit aliquam ac. Quisque rhoncus tellus nibh, ac lobortis dui luctus quis. Integer odio nisi, dictum vel mauris nec, mollis sollicitudin libero. In at efficitur sapien.</p>
                <p>Quisque velit tortor, varius vel enim non, pharetra suscipit arcu. Suspendisse tempus cursus arcu id tincidunt. Maecenas quis sem ultrices, auctor dolor eget, bibendum ipsum. Ut in turpis at erat consectetur tristique ornare sit amet enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in pretium erat. Integer ex ipsum, vehicula in pharetra sit amet, varius eu turpis. Fusce rutrum erat et lacus pellentesque consequat. Integer tristique odio vel mi finibus cursus. Nunc eu orci orci. Sed facilisis luctus lectus vitae porttitor.</p>
                <p>Etiam ac iaculis est. Integer vel lorem elementum, sagittis neque sit amet, rhoncus ligula. Curabitur finibus eget nisi at consequat. Duis eros nulla, venenatis eu ipsum at, bibendum placerat diam. Vivamus pharetra varius efficitur. Duis volutpat velit sem, sed dignissim nibh molestie vitae. Ut nunc lacus, consequat eu mi id, suscipit hendrerit dolor. Curabitur placerat, arcu sit amet tincidunt facilisis, dui lorem tincidunt lorem, eu elementum nulla orci non enim. Fusce ex mauris, condimentum eu auctor quis, varius id velit. Duis accumsan suscipit pretium. Nulla diam arcu, sodales in metus a, faucibus facilisis nunc. Praesent maximus tempor dui, non auctor purus sodales ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                <p>Cras tristique bibendum aliquam. Praesent in auctor diam. Donec ac accumsan elit, ut tincidunt lacus. Maecenas tristique pellentesque nisl, id tincidunt dui. Vestibulum vitae euismod nisl. Aliquam blandit arcu viverra tortor pharetra, eget ultrices urna sodales. Nunc ultricies purus at quam porttitor facilisis. Praesent hendrerit orci at pellentesque varius. Duis in ipsum vel ipsum ornare interdum ac vel lectus. Proin dictum tortor nec urna sodales faucibus. Aenean pellentesque lorem non leo dictum efficitur. Curabitur pretium vel massa venenatis ullamcorper.</p>
                <p>Morbi et est accumsan, faucibus quam at, rhoncus est. Fusce ac sapien sit amet leo feugiat tristique. Aenean volutpat mollis felis vel condimentum. Ut blandit risus felis, eu ultrices mauris volutpat non. Praesent nec ultrices tellus, dapibus viverra est. In vitae accumsan nisl. Nam vel consectetur tellus, a pharetra dui. Fusce faucibus fringilla ipsum ac venenatis.</p>
                <p>Nam dui augue, fermentum quis orci ac, varius convallis libero. Sed vitae purus id lorem dapibus aliquam vehicula at lacus. Vivamus ac placerat urna. Nullam tempus sit amet arcu in laoreet. Suspendisse sed dictum tortor. Nullam aliquam eu purus vel ultrices. Etiam tincidunt quis est vitae tempor. Duis at justo eget arcu molestie aliquet. In vulputate dolor in quam auctor suscipit. Maecenas laoreet tristique diam. Sed tincidunt neque vitae lorem dictum, vitae feugiat tortor imperdiet. Fusce nisl metus, pretium sit amet luctus at, malesuada sit amet lectus. Maecenas sit amet euismod ante.</p>
                <p>Phasellus id sem tincidunt, congue sapien pharetra, iaculis magna. Donec varius est sit amet lacus maximus, et viverra tortor venenatis. Vivamus in nisl eget nulla dapibus pellentesque et vitae nisi. Nam semper, neque id volutpat consectetur, enim erat gravida mi, at blandit ex dolor vel nibh. Nulla venenatis diam nisl, laoreet feugiat lorem rutrum eu. Suspendisse quis tellus tortor. Fusce venenatis iaculis placerat. Quisque ullamcorper neque sit amet dapibus rhoncus. Aliquam vehicula nunc augue, quis interdum lectus feugiat ut. Proin eget lacus tincidunt, viverra ante non, tristique justo. In dapibus in arcu ac rutrum. Etiam ut rutrum sapien. Vestibulum in fermentum enim. In hac habitasse platea dictumst.</p>
                <p>Nam tincidunt dolor placerat mauris hendrerit, sed hendrerit arcu pharetra. Curabitur ex nulla, ornare quis pharetra sit amet, blandit a nunc. Mauris pharetra, sem a placerat euismod, odio lorem sodales tellus, sit amet hendrerit lorem nibh eu lorem. Phasellus sed odio enim. Praesent ut ligula porta, molestie sem ac, lobortis massa. Ut diam massa, tristique eget tempus iaculis, consectetur non justo. Curabitur imperdiet faucibus malesuada. Cras viverra nisl at nibh dictum feugiat. Vestibulum semper sapien elementum eros cursus, et iaculis ligula faucibus. Nunc vitae leo at urna tincidunt blandit. Sed id pretium tellus, nec tempus diam. Etiam accumsan nulla a massa tristique semper. Fusce quis dapibus lectus, id condimentum velit. Nulla facilisi. Etiam pretium magna nisi, finibus fringilla dolor feugiat in. Ut sagittis mollis facilisis.</p>
                <p>Cras gravida, massa vel ullamcorper ullamcorper, risus sem blandit eros, eget condimentum urna nisi eu lacus. Sed mollis sed sapien et condimentum. Integer vulputate lectus consequat suscipit sagittis. Nunc gravida posuere orci in ultrices. Suspendisse vel turpis pellentesque, gravida nibh a, rutrum neque. Aenean posuere mi quam, quis mollis metus auctor a. Sed a convallis dolor. Mauris ornare magna mi, in facilisis metus aliquet non. Quisque placerat condimentum orci. Duis at nunc scelerisque, feugiat risus a, interdum elit.</p>
            </div>
        </div>
    );
}

export default App;
