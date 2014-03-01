var DEFAULT_TITLE = 'INTRODUCTION';
var DEFAULT_DETAILS = 'At Caring & Co. we seek to find and provide high quality and innovative medical products to prolong life and ease suffering. We are committed to build up bidirectional connections between Europe and China in healthcare, and to introduce high standard western medical products and healthcare system to China, and to introduce products from Chinese manufacturers into Europe. We are keen to work with individuals and companies eager to contribute to this rapidly emerging network of opportunity and growth.';

var DR_MIAORONG_TSE_TITLE = 'Dr. Miaorong Tse';
var DR_MIAORONG_TSE_DETAILS = 'Dr. Xie is currently the Vice-Principal of Beijing Friendship Hospital and an expert in cardiovascular disease with over 25 years of experience in the medical field. He previously served as the hospital’s Chief Executive of Medical Administration, and as the Head of the Outpatient and Emergency Department. He has an intimate understanding of the Chinese healthcare system and a great deal of experience in managing general hospitals. He advocates improving the Chinese healthcare system through high standard academic and technical exchange with western hospitals.';

var DR_YUHONG_SHE_TITLE = 'Dr. Yuhong She';
var DR_YUHONG_SHE_DETAILS = 'Dr. She is an expert plastic surgeon, the Principal of Dr. She Yu Hong Aesthetic Plastic Surgery Clinic, the founder of Chinese Medical Association Ningbo Plastic Surgery, and a member Asian Pacific Academy of Cosmetic Surgery and American Society of Plastic Surgery. Dr. She has been a visiting scholar at universities in the US and Singapore, and is enthusiastic about improving the standard of Chinese plastic surgery by introducing cutting-edged technology to Chinese market.';

var MR_YE_LIU_TITLE = 'Mr. Ye Liu';
var MR_YE_LIU_DETAILS = 'Mr. Liu is Chairman and General Manager of Xiuhe Medical Technique Co., Ltd. He was previously the Director of the medical division and Deputy General Manager in EPS China. EPS China is one of the leading providers and manufacturers of medicine to the medicine sector in China and Japan. Prior to becoming deputy general manager of EPS China, Ye was the head of development of Sankyo Co., Ltd for six years in Japan and spent 10 years as a medical journalist and editor in Health News in China. With work experience in medical trading businesses in China and Japan, and a degree in clinical medicine from the Norman Bethune College of Medicine, Jilin University, Ye has turned his focus towards European market.';

var BUSINESS_PARTNERS_TITLE = 'BUSINESS PARTNERS';
var BUSINESS_PARTNERS_DETAILS = 'Beijing Xiuhe Medical Technique Co., Ltd<br/>Dr. She Yu Hong Aesthetic Plastic Surgery Clinic';

app.controller('AboutController', ['$scope',
  function($scope) {

    $scope.title = DEFAULT_TITLE;
    $scope.details = DEFAULT_DETAILS;

    $scope.showDefault = function() {
      $scope.title = DEFAULT_TITLE;
      $scope.details = DEFAULT_DETAILS;
    };

    $scope.showDrMiaoRongTse = function() {
      $scope.title = DR_MIAORONG_TSE_TITLE;
      $scope.details = DR_MIAORONG_TSE_DETAILS;
    };

    $scope.showDrYuhongShe = function() {
      $scope.title = DR_YUHONG_SHE_TITLE;
      $scope.details = DR_YUHONG_SHE_DETAILS;
    };

    $scope.showMrYeLiu = function() {
      $scope.title = MR_YE_LIU_TITLE;
      $scope.details = MR_YE_LIU_DETAILS;
    };

    $scope.showBusinessPartners = function() {
      $scope.title = BUSINESS_PARTNERS_TITLE;
      $scope.details = BUSINESS_PARTNERS_DETAILS;
    };

    $scope.showDefault();
  }
]);