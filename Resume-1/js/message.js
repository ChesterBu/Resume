(function (params) {
    let view = document.querySelector('section.message');

    let model = {
        init() {
            const appId = '6vOT7ji71jYK9qUPV3OpVlJz-gzGzoHsz';
            const appKey = '7lS77Pp4J75FI56XAnxGJtK2';
            AV.init({
                appId,
                appKey
            });
        },
        fetch() {
            let query = new AV.Query('Message');
            return query.find();
        },
        save(name, content) {
            let Message = AV.Object.extend('Message');
            let message = new Message();
            return message.save({
                'name': name,
                'content': content
            });
        }
    };

    let controller = {
        view: null,
        model: null,
        messageList: null,
        init(view, model) {
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.model.init();
            this.loadMessages();
            this.bindEvents();
        },
        loadMessages() {
            this.model.fetch().then(messages => {
                    let array = messages.map(item => item.attributes);
                    array.forEach(item => {
                        let li = document.createElement('li');
                        li.innerText = `${item.name}: ${item.content}`;
                        let messageList = document.querySelector('#messageList');
                        this.messageList.appendChild(li);
                    });
                }

            );
        },
        saveMessage() {
            let myForm = this.form;
            let content = myForm.querySelector('input[name=content]').value;
            let name = myForm.querySelector('input[name=name]').value;
            this.model.save(name,content).then(function (object) {
                    let li = document.createElement('li');
                    li.innerText = `${object.attributes.name}:${object.attributes.content}`;
                    let messageList = document.querySelector('#messageList');
                    messageList.appendChild(li);
                    myForm.querySelector('input[name=content]').value = '';
                });
        },
        bindEvents() {
            this.form.addEventListener('submit', (e)=>{
                e.preventDefault();
                //console.log(this); controller
                this.saveMessage();
            });
        },
        
    };

    controller.init(view,model);
}());
    
    