import moment from 'moment';

// 버튼 활성화, 비활성화
export const activateButton = (id) => {
    const button = document.getElementById(id);
    button.classList.add('active');
};

export const deactivateButton = (id) => {
    const button = document.getElementById(id);
    button.classList.remove('active');
};

export const updateState = (field, message, setState) => {
    setState((prevState) => ({
        ...prevState,
        [field]: message,
    }));
};

export const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};
export const handleSingleInputChange = (e, setState) => {
    setState(e.target.value);
};

// 조회수,댓글,좋아요 수 등 형식 변환
export const formatCount = (count) => {
    count *= 1;
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'm';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(0) + 'k';
    } else {
        return count.toString();
    }
};

// 제목 26글자 제한
export const titleSlice = (title) => {
    const TITLE_MAX_LENGTH = 26;
    if (title.length > TITLE_MAX_LENGTH) return title.substring(0, TITLE_MAX_LENGTH);
    return title;
};

export const formatDate = (isoDate) => {
    return moment(isoDate).format('YYYY-MM-DD HH:mm:ss');
};
