window.onload = function() {

    const global = window.parent;

    // DOM
    const input = document.querySelector('#search-area');
    const search = document.querySelector('#searchBtn');
    const clear = document.querySelector('#clearBtn');
    
    // 文档监听: 除了按钮点击其他地方自动聚焦input
    document.addEventListener('click', () => {
        input.focus();
    });
    

    // 按钮事件: 搜索全文, 不会自动聚焦input
    function searchOrClear(e, flag = true) {
        e.stopPropagation();
        flag ? 
        (global.searchByKeyWord(input.value), 
        input.value = '')
        :
        global.stopSearch();
    }
    search.addEventListener('click', e => searchOrClear(e));
    clear.addEventListener('click', e => searchOrClear(e, false));
    document.addEventListener('contextmenu', e => searchOrClear(e, false))
    input.addEventListener('keydown', e => {
        e.which === 13 ?
        searchOrClear(e)
        :
        ''
    })
}