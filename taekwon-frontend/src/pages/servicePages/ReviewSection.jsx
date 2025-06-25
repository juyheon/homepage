import { useState } from "react";

const initialReviews = [
  { id: 1, name: "홍길동", content: "도장이 깨끗하고 선생님이 친절해요!" },
  { id: 2, name: "김영희", content: "아이들이 즐겁게 운동해서 좋아요." }
];

const ReviewSection = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  // 후기 등록
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    setReviews([
      ...reviews,
      { id: Date.now(), name: name.trim(), content: content.trim() }
    ]);
    setName("");
    setContent("");
    setShowModal(false);
  };

  // 후기 삭제
  const handleDelete = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  // 후기 수정 시작
  const handleEdit = (id, content) => {
    setEditId(id);
    setEditContent(content);
  };

  // 후기 수정 저장
  const handleEditSave = (id) => {
    setReviews(reviews.map(r =>
      r.id === id ? { ...r, content: editContent } : r
    ));
    setEditId(null);
    setEditContent("");
  };

  return (
    <div className="flex flex-col min-h-screen text-white">
      <main className="flex-grow container mx-auto p-4 mt-20 max-w-xl">
        <h2 className="text-2xl font-bold mb-4">후기</h2>
        <ul>
          {reviews.map(review => (
            <li key={review.id} className="border-b py-2 flex flex-col gap-1">
              <div>
                <strong>{review.name}</strong>
              </div>
              {editId === review.id ? (
                <div className="flex gap-2">
                  <input
                    className="border p-1 flex-1"
                    value={editContent}
                    onChange={e => setEditContent(e.target.value)}
                  />
                  <button
                    className="bg-green-500 text-white px-2 rounded"
                    onClick={() => handleEditSave(review.id)}
                  >
                    저장
                  </button>
                  <button
                    className="bg-gray-400 text-white px-2 rounded"
                    onClick={() => setEditId(null)}
                  >
                    취소
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>{review.content}</span>
                  <button
                    className="text-sm text-blue-500"
                    onClick={() => handleEdit(review.id, review.content)}
                  >
                    수정
                  </button>
                  <button
                    className="text-sm text-red-500"
                    onClick={() => handleDelete(review.id)}
                  >
                    삭제
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
      {/* 하단 고정 등록 버튼 제거 */}
      {/* <div className="w-full flex justify-end fixed bottom-0 left-0 bg-black bg-opacity-80 p-4 z-50">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded text-lg font-bold shadow-lg"
          onClick={() => setShowModal(true)}
        >
          등록
        </button>
      </div> */}
      {/* 후기 작성 버튼을 footer 위로 이동 */}
      <div className="w-full flex justify-end bg-black bg-opacity-80 p-4">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded text-lg font-bold shadow-lg"
          onClick={() => setShowModal(true)}
        >
          등록
        </button>
      </div>
      {/* 후기 작성 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-[400px] w-full relative">
            <button
              className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-[32px]"
              onClick={() => setShowModal(false)}
              aria-label="닫기"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-black">후기 작성</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                className="border p-2"
                placeholder="이름"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                className="border p-2"
                placeholder="후기 내용"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded self-end" type="submit">
                등록
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;