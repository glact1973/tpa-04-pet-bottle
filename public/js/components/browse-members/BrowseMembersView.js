import {
  removeChildren,
} from '../../dom-utils.js';

class BrowseMembersView {
  constructor() {
    this.rootEl = document.querySelector('#container');
  }

  clearDom() {
    removeChildren(this.rootEl);
  }

  render(props) {
    const {
      currentMemberIndex,
      handleBrowseNextMember,
      membersList,
    } = props;

    const {
      name,
      thumbnailUrl,
      quote,
    } = membersList[currentMemberIndex];

    this.clearDom();

    /*
      TODO: 動的にDOM要素を作成して、
      "#container"というidを持つDIV要素の子要素として追加してください...

        <div class="member-profile">
          <div class="member-image-box">
            <img src="" alt="(会員のイメージ)">
          </div>
          <h3>名前</h3>
          <p class="member-name">
            <!-- 会員の名前、たとえば「じじー」-->
          </p>
          <h3>一言</h3>
          <p class="member-text">
            <!-- 会員の自己紹介 -->
          </p>
        </div>
        <button class="btn-next-member">次へ</button>
    */
    const memberProfile = document.createElement('div');
    memberProfile.className = 'member-profile';

    const memberImageBox = document.createElement('div');
    memberImageBox.className = 'member-image-box';

    const img = document.createElement('img')
    img.setAttribute('src','');
    img.setAttribute('alt','(会員のイメージ)');

    const namae = document.createElement('h3');
    namae.innerHTML = '名前';

    const memberName = document.createElement('p');
    memberName.className = 'member-name';
    memberName.innerHTML = 'おばた';

    const hitokoto = document.createElement('h3');
    hitokoto.innerHTML = '一言';
    
    const memberText = document.createElement('p');
    memberText.innerHTML = '営業からエンジニア見習いになるところです';

    const btnNextMember = document.createElement('button')
    btnNextMember.className = 'btn-next-member';
    btnNextMember.innerHTML = '次へ';

    memberProfile.appendChild(memberImageBox);
    memberImageBox.appendChild(img);
    memberProfile.appendChild(namae);
    memberProfile.appendChild(memberName);
    memberProfile.appendChild(hitokoto);
    memberProfile.appendChild(memberText);

    document.querySelector('#container').appendChild(memberProfile);
    document.querySelector('#container').appendChild(btnNextMember);

  }
}

export default BrowseMembersView;
