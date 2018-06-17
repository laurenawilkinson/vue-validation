new Vue({
        el: '#app',
        data: {
            name: '',
            email: '',
            password: '',
            gender: '',
            interests: [],
            remainingChars: 16,
            nameClass: {
                'text-input': true,
                animated: false,
                shake: false
            }
        },
        computed: {
            passwordValidation: function (){
                let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{4,}$/;
                
                if (re.test(this.password) === false){
                    return 'Must include at least one uppercase letter, lowercase letter and number';
                }
                else{
                    return 'Strong password';
                }
            },
            emailValidation: function (){
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                
                if(this.email === ''){
                    return 'Enter a valid email address';
                }
                else if(re.test(this.email.toLowerCase()) === false){
                    return 'Invalid email';
                }
                else{
                    return 'Valid email';
                }
            },
            genderValidation: function (){
                if (this.gender === ''){
                    return 'Select your gender'
                }
                else{
                    return `You chose ${this.gender}`;
                }
            },
            interestsValidation: function (){
                if (this.interests.length === 0){
                    return 'Please select at least one interest'
                }else if(this.interests.length === 3){
                    return `Great! We'll send you news about ${this.interests[0]}, ${this.interests[1]} and ${this.interests[2]}.`;
                }else if(this.interests.length > 0){
                    return `Great! We'll send you news about ${this.interests.join(' and ')}.`;
                }
            }            
        },
        methods:{
            nameValidation: function (){            
                this.remainingChars = 16 - this.name.length;
                if(this.remainingChars === 0){
                    this.nameClass.shake = true;
                    this.nameClass.animated = true;
                }
                else{
                    this.nameClass.shake = false;
                    this.nameClass.animated = false;
                }
            },
            removeSpace: function (){
                let split = this.password.split('');
                split.pop();
                return this.password = split.join('');
                
            }
        }
    }
)